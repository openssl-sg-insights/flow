use schemars::schema::RootSchema;
use serde_json::Value as JsonValue;
use std::io::BufRead;

use crate::inference::infer_shape;
use crate::schema::SchemaBuilder;
use crate::shape;

type StreamResult = Result<JsonValue, serde_json::Error>;
type DocumentStream = Box<dyn Iterator<Item = StreamResult>>;

pub fn infer_schema<R: BufRead + 'static>(reader: R) -> Result<RootSchema, anyhow::Error> {
    let stream = serde_json::de::Deserializer::from_reader(reader).into_iter();
    let documents = stream;
    let schema = analyze(Box::new(documents))?;

    Ok(schema)
}

fn analyze(values: DocumentStream) -> Result<RootSchema, anyhow::Error> {
    // TODO: replace this mess with `try_reduce` when it is stablized.
    let mut acc = None;

    for result in values {
        let shape = infer_shape(&result?);
        if let Some(acc_shape) = acc {
            acc = Some(shape::merge(acc_shape, shape));
        } else {
            acc = Some(shape);
        }
    }

    if let Some(shape) = acc {
        Ok(SchemaBuilder::new(shape).root_schema())
    } else {
        Err(anyhow::anyhow!("no documents found"))
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use serde_json::json;

    fn to_stream(documents: Vec<JsonValue>) -> DocumentStream {
        Box::new(documents.into_iter().map(Result::Ok))
    }

    #[test]
    fn test_generator_with_multiple_values() {
        let data = json!({"a_null_value": null, "boolean": true, "number": 123, "string": "else"});

        let schema = analyze(to_stream(vec![data])).unwrap();
        insta::assert_json_snapshot!(schema);
    }

    #[test]
    fn test_nested_values() {
        let data = json!({
            "id": 1,
            "title": "First Post",
            "author": {
                "name": "Bruce Wayne",
                "contact": "bruce@wayneenterprises.com",
            },
            "tags": ["meta"],
        });

        let schema = analyze(to_stream(vec![data])).unwrap();
        insta::assert_json_snapshot!(schema);
    }

    #[test]
    fn test_very_nested() {
        let data = json!({
            "one": {
                "two": {
                    "three": {
                        "four": {
                            "five": {
                                "f": "foo",
                            },
                            "e": false,
                        },
                        "d": null,
                    },
                    "c": 2.9999_f64,
                },
                "b": 2_u8,
            },
            "a": true,
        });

        let schema = analyze(to_stream(vec![data])).unwrap();
        insta::assert_json_snapshot!(schema);
    }

    #[test]
    fn simple_schema_merging() {
        let data_one = json!({
            "a": 1,
            "b": [true, false, true],
            "c": {
                "inner": null,
                "optional": []
            },
            "s": {
                "sometimes": "an object",
            },
            "x": "extra",
        });
        let data_two = json!({
            "a": 2,
            "b": null,
            "c": {
                "inner": "nested data",
            },
            "s": "sometimes a string",
            "y": ["why not"],
        });

        let schema = analyze(to_stream(vec![data_one, data_two])).unwrap();
        insta::assert_json_snapshot!(schema);
    }

    #[test]
    fn multi_merging() {
        let data_one = json!({
            "a": 1,
            "b": [{"truthful": "yes"}, {"truthful": "no", "harmless": "yes"}],
            "c": {
                "inner": null,
                "optional": []
            },
            "x": "extra",
        });
        let data_two = json!({
            "a": 2,
            "b": [true],
            "c": {
                "inner": "nested data",
            },
            "y": ["why not"],
        });
        let data_three = json!({
            "a": { "real": 2.5, "imaginary": -1 },
            "b": [{"truthful": true, "hurtful": true}, {"truthful": false}],
            "c": {
                "inner": { "details": "fascinating" },
                "optional": [4,5,6],
                "even_more_optional": true,
            },
            "x": "extra extra",
            "z": null,
        });

        let schema = analyze(to_stream(vec![data_one, data_two, data_three])).unwrap();
        insta::assert_json_snapshot!(schema);
    }
}
