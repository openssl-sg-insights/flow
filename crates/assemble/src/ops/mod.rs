//! The Flow runtime automatically publishes statistics and logs related to each task. It publishes
//! this data to Flow collections, so that users can create derivations and materializations of
//! that data. This module generates the Flow specs and schemas for these collections.
use models;
use proto_flow::flow;
use serde_json::{value::RawValue, Value};
use std::collections::BTreeSet;
use url::Url;

struct GeneratedSchema {
    url: Url,
    content: &'static [u8],
}

macro_rules! gen_schema {
    ($name:expr) => {
        GeneratedSchema {
            content: &*include_bytes!($name),
            url: builtin_url($name),
        }
    };
}

/// Adds ops collections to the given partial built catalog. The tables will be modified in place
/// to add the resources required for the ops (logs and stats) collections.
pub fn generate_ops_collections(tables: &mut tables::Sources) {
    let tenants = all_tenant_names(tables);
    let shard_schema = gen_schema!("ops-shard-schema.json");
    let stats_schema = gen_schema!("ops-stats-schema.json");
    let log_schema = gen_schema!("ops-log-schema.json");

    for schema in &[&shard_schema, &stats_schema, &log_schema] {
        tables.resources.insert_row(
            schema.url.clone(),
            flow::ContentType::JsonSchema,
            bytes::Bytes::from_static(schema.content),
            serde_json::from_slice::<Box<RawValue>>(schema.content)
                .expect("builtin schema is JSON"),
        );
        let dom = serde_json::from_slice::<Value>(schema.content)
            .expect("failed to parse builtin schema");
        tables.schema_docs.insert_row(schema.url.clone(), dom);
    }

    // Track that stats_schema and log_schema each import shard_schema.
    tables
        .imports
        .insert_row(&stats_schema.url, &stats_schema.url, &shard_schema.url);
    tables
        .imports
        .insert_row(&log_schema.url, &log_schema.url, &shard_schema.url);

    // Setup imports to allow derivations and materializations to reference these ops collections.
    // Flow currently validates that an import path exists whenever a derivation or materialization
    // references a collection as a source, so without these imports you wouldn't be able to
    // actually derive or materialize the ops collections. This is a restriction that we'll
    // probably need to revisit, but in the meantime we'll just set it up so that everything
    // implicitly imports the resource URL of the ops collections.
    let importers = tables
        .resources
        .iter()
        .filter(|r| r.content_type == flow::ContentType::Catalog)
        .map(|r| r.resource.clone())
        .collect::<Vec<_>>();
    for importer in importers {
        tables.imports.insert_row(
            ops_collection_resource_url(),
            importer,
            ops_collection_resource_url(),
        );
    }

    for tenant in tenants {
        let logs_collection_name = format!("ops/{}/logs", tenant);
        let stats_collection_name = format!("ops/{}/stats", tenant);
        add_ops_collection(logs_collection_name, log_schema.url.clone(), tables);
        add_ops_collection(stats_collection_name, stats_schema.url.clone(), tables);
    }
}

fn ops_collection_resource_url() -> Url {
    builtin_url("ops/generated/collections")
}

fn add_ops_collection(name: String, schema_url: Url, tables: &mut tables::Sources) {
    let scope = ops_collection_resource_url();

    let name = models::Collection::new(name);
    let key = vec![
        models::JsonPointer::new("/shard/name"),
        models::JsonPointer::new("/shard/keyBegin"),
        models::JsonPointer::new("/shard/rClockBegin"),
        models::JsonPointer::new("/ts"),
    ];

    tables.collections.insert_row(
        scope.clone(),
        name.clone(),
        serde_json::from_value::<models::CollectionDef>(serde_json::json!({
            "schema": false,
            "key": key,
        }))
        .unwrap(),
        schema_url,
    );

    // Ops collections are partitioned by kind and name, to allow users to easily consume logs or
    // stats for a single task, or all tasks of a type.
    let projections = &[("kind", "/shard/kind"), ("name", "/shard/name")];
    for (field, ptr) in projections {
        tables.projections.insert_row(
            scope.clone(),
            name.clone(),
            models::Field::new(*field),
            models::Projection::Extended {
                location: models::JsonPointer::new(*ptr),
                partition: true,
            },
        );
    }
}

fn all_tenant_names(tables: &tables::Sources) -> BTreeSet<String> {
    let mut tenants = BTreeSet::new();
    let captures = tables.captures.iter().map(|c| c.capture.as_str());
    let derivations = tables.derivations.iter().map(|d| d.derivation.as_str());
    let materializations = tables
        .materializations
        .iter()
        .map(|m| m.materialization.as_str());
    let iter = captures.chain(derivations).chain(materializations);
    for name in iter {
        let tenant = first_path_component(name);
        if !tenants.contains(tenant) {
            tenants.insert(tenant.to_string());
        }
    }
    tenants
}

fn first_path_component(task_name: &str) -> &str {
    match task_name.split_once('/') {
        Some((first, _)) => first,
        None => task_name,
    }
}

fn builtin_url(name: &str) -> Url {
    Url::parse(&format!("builtin://flow/{}", name)).unwrap()
}

#[cfg(test)]
mod test {
    use super::*;
    use serde_json::{from_value, json};

    #[test]
    fn ops_collections_are_generated() {
        let mut tables = tables::Sources::default();
        tables.captures.insert_row(
            builtin_url("test-cap.flow.yaml#/collections/acmeCo~1foo"),
            models::Capture::new("acmeCo/foo"),
            from_value::<models::CaptureDef>(
                json!({"endpoint":{"connector": {"image": "foo/bar", "config": {}}}, "bindings":[]}),
            )
            .unwrap(),
            None,
        );
        tables.captures.insert_row(
            builtin_url("test-cap.flow.yaml#/collections/shamazon~1bar"),
            models::Capture::new("shamazon/bar"),
            from_value::<models::CaptureDef>(
                json!({"endpoint":{"connector": {"image": "foo/bar", "config": {}}}, "bindings":[]}),
            )
            .unwrap(),
            None,
        );
        tables.derivations.insert_row(
            builtin_url("test-der.flow.yaml#/collections/gooble~1ads"),
            models::Collection::new("gooble/ads"),
            from_value::<models::Derivation>(json!({"transform": {}})).unwrap(),
            builtin_url(
                "test-der.flow.yaml?ptr=/collections/shamazon~1bar/derivation/register/schema",
            ),
            None,
        );
        tables.derivations.insert_row(
            builtin_url("test-der.flow.yaml#/collections/acmeCo~1tnt"),
            models::Collection::new("acmeCo/tnt"),
            from_value::<models::Derivation>(json!({"transform": {}})).unwrap(),
            builtin_url(
                "test-der.flow.yaml?ptr=/collections/acmeCo~1tnt/derivation/register/schema",
            ),
            None,
        );
        tables.materializations.insert_row(
            builtin_url("test-mat.flow.yaml#/collections/justme"),
            models::Materialization::new("justme"),
            from_value::<models::MaterializationDef>(
                json!({"endpoint":{"connector": {"image": "foo/bar", "config": {}}}, "bindings":[]}),
            )
            .unwrap(),
            None,
        );

        generate_ops_collections(&mut tables);

        insta::assert_debug_snapshot!(&tables);
    }
}
