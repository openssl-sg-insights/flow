use super::{
    projections, specs, sql_params, Derivation, Error, Resource, Result, Schema, Scope, DB,
};

/// Collection represents a catalog Collection.
#[derive(PartialEq, Eq, Debug, Copy, Clone)]
pub struct Collection {
    pub id: i64,
    pub resource: Resource,
}

impl Collection {
    /// Registers a Collection of the Source with the catalog.
    pub fn register(scope: Scope, spec: &specs::Collection) -> Result<Collection> {
        // Register and import the schema document.
        let schema = scope.push_prop("schema").then(|scope| {
            let schema = Schema::register(scope, &spec.schema)?;
            Resource::register_import(scope, schema.resource)?;
            Ok(schema)
        })?;

        scope
            .db
            .prepare_cached(
                "INSERT INTO collections (
                    collection_name,
                    schema_uri,
                    key_json,
                    resource_id
                ) VALUES (?, ?, ?, ?)",
            )?
            .execute(sql_params![
                spec.name.as_ref(),
                schema.primary_url_with_fragment(scope.db)?,
                serde_json::to_string(&spec.key)?,
                scope.resource().id,
            ])?;

        let collection = Collection {
            id: scope.db.last_insert_rowid(),
            resource: scope.resource(),
        };

        scope.push_prop("projections").then(|scope| {
            projections::register_projections(&scope, collection, &spec.projections)
        })?;

        if let Some(spec) = &spec.derivation {
            scope
                .push_prop("derivation")
                .then(|scope| Derivation::register(scope, collection, spec))?;
        }

        log::info!("added collection {}", spec.name.as_ref());
        Ok(collection)
    }

    /// Returns the imported collection with the given name, or an error if it doesn't exist. The
    /// named collection must have been imported (either transitively or directly) by the current
    /// resource, or else an error will be returned.
    pub fn get_imported_by_name(scope: Scope, name: &str) -> Result<Collection> {
        let collection = Collection::get_by_name(scope.db, name)?;
        // Verify that the catalog spec of the collection is imported by the current scope.
        Resource::verify_import(scope, collection.resource)?;
        Ok(collection)
    }

    /// Returns the collection with the given name, without verifying any imports. Returns an error
    /// if the collection does not exist.
    pub fn get_by_name(db: &DB, name: &str) -> Result<Collection> {
        // This query returns the closest match, even if it's not the same. We'll check later to
        // make sure that the returned row is actually the desired collection. This allows us to
        // include the closest match in the error, so we can display it to the user as a suggestion.
        let (collection_id, collection_name, resource_id, osa_dist): (i64, String, i64, i64) = db
            .prepare_cached(
                "SELECT collection_id, collection_name, resource_id, osa_distance(collection_name, ?) as osa_dist
                FROM collections
                ORDER BY osa_dist ASC
                LIMIT 1;",
            )?
            .query_row(&[name], |r| Ok((r.get(0)?, r.get(1)?, r.get(2)?, r.get(3)?))).map_err(|err| {
                if matches!(err, rusqlite::Error::QueryReturnedNoRows) {
                    Error::missing_collection(name.to_string(), None)
                } else {
                    Error::from(err)
                }
            })?;

        if collection_name != name {
            log::debug!(
                "Query for collection: '{}' returned '{}' with osa_distance: {}",
                name,
                collection_name,
                osa_dist,
            );

            // We got the closest match, not the collection we wanted
            Err(Error::missing_collection(
                name.to_string(),
                Some((collection_name, osa_dist)),
            ))
        } else {
            // We got the collection we wanted
            Ok(Collection {
                id: collection_id,
                resource: Resource { id: resource_id },
            })
        }
    }

    /// Returns the schema URI of the Collection.
    pub fn schema_uri(&self, db: &DB) -> Result<url::Url> {
        Ok(db.query_row(
            "SELECT schema_uri FROM collections WHERE collection_id = ?;",
            rusqlite::params![self.id],
            |row| row.get(0),
        )?)
    }

    /// Returns the collection's key
    pub fn key(&self, db: &DB) -> Result<Vec<String>> {
        let json = db.query_row(
            "SELECT key_json FROM collections WHERE collection_id = ?;",
            rusqlite::params![self.id],
            |row| row.get::<usize, String>(0),
        )?;
        let key = serde_json::from_str(&json)?;
        Ok(key)
    }
}

#[cfg(test)]
mod test {
    use super::{
        super::{create, dump_tables},
        *,
    };
    use rusqlite::params as sql_params;
    use serde_json::json;

    #[test]
    fn test_register() {
        let db = create(":memory:").unwrap();

        let schema = json!({
            "$anchor": "foobar",
            "type": "object",
            "properties": {
                "a": {
                    "type": "object",
                    "properties": {
                        "a": {
                            "type": "string"
                        }
                    }
                },
                "b": {
                    "type": "object",
                    "properties": {
                        "b": {
                            "type": "string"
                        }
                    }
                },
                "key": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    },
                    "minItems": 2
                }
            }
        });
        db.execute(
            "INSERT INTO resources (resource_id, content_type, content, is_processed) VALUES
                    (1, 'application/vnd.estuary.dev-catalog-spec+yaml', X'1234', FALSE),
                    (10, 'application/schema+yaml', CAST(? AS BLOB), FALSE);",
            sql_params![schema],
        )
        .unwrap();
        db.execute(
            "INSERT INTO resource_urls (resource_id, url, is_primary) VALUES
                    (1, 'test://example/spec', TRUE),
                    (10, 'test://example/schema.json', TRUE)",
            sql_params![],
        )
        .unwrap();

        let spec: specs::Collection = serde_json::from_value(json!({
            "name": "test/collection",
            "schema": "schema.json#foobar",
            "key": ["/key/1", "/key/0"],
            "projections": {
                "field_a": {"location": "/a/a", "partition": true},
                "field_b": {"location": "/b/b", "partition": false},
            }
        }))
        .unwrap();

        let collection = Scope::empty(&db)
            .push_resource(Resource { id: 1 })
            .then(|scope| Collection::register(scope, &spec))
            .expect("failed to register collection");

        // Expect that the schema was processed.
        assert!(Resource { id: 10 }.is_processed(&db).unwrap());

        // Expect the collection records the absolute schema URI, with fragment component.
        let dump = dump_tables(
            &db,
            &[
                "resource_imports",
                "collections",
                "projections",
                "partitions",
            ],
        )
        .unwrap();

        insta::assert_yaml_snapshot!(dump);

        let key = collection.key(&db).expect("failed to get key");
        assert_eq!(vec!["/key/1".to_string(), "/key/0".to_string()], key);

        let schema_uri = collection
            .schema_uri(&db)
            .expect("failed to get schema_uri");
        assert_eq!("test://example/schema.json#foobar", schema_uri.as_str());
    }
}