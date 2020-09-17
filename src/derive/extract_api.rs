use crate::doc::Pointer;
use estuary_protocol::flow;

#[derive(thiserror::Error, Debug)]
pub enum Error {
    #[error("JSON error: {0}")]
    Json(#[from] serde_json::Error),
    #[error("invalid arena range: {0:?}")]
    InvalidArenaRange(flow::Slice),
    #[error("invalid document UUID: {value}")]
    InvalidUuid { value: serde_json::Value },
}

#[derive(Debug)]
pub struct API {}

#[tonic::async_trait]
impl flow::extract_server::Extract for API {
    async fn extract(
        &self,
        request: tonic::Request<flow::ExtractRequest>,
    ) -> Result<tonic::Response<flow::ExtractResponse>, tonic::Status> {
        extract_rpc(request.get_ref())
            .map(tonic::Response::new)
            .map_err(|err| tonic::Status::invalid_argument(format!("{}", err)))
    }
}

fn extract_rpc(request: &flow::ExtractRequest) -> Result<flow::ExtractResponse, Error> {
    // Allocate an ExtractResponse of the right shape.
    let mut response = flow::ExtractResponse {
        arena: Vec::new(),
        uuid_parts: Vec::with_capacity(request.docs_json.len()),
        fields: request
            .field_ptrs
            .iter()
            .map(|_| flow::Field {
                values: Vec::with_capacity(request.docs_json.len()),
            })
            .collect(),
    };

    // Project UUID pointer, hashes and fields into parsed JSON pointers.
    let uuid_ptr = Pointer::from(&request.uuid_ptr);
    let field_ptrs: Vec<Pointer> = request.field_ptrs.iter().map(|p| p.into()).collect();

    for doc in request.docs_json.iter() {
        let b = request
            .arena
            .get(doc.begin as usize..doc.end as usize)
            .ok_or_else(|| Error::InvalidArenaRange(doc.clone()))?;
        let doc: serde_json::Value = serde_json::from_slice(b)?;

        response
            .uuid_parts
            .push(extract_uuid_parts(&doc, &uuid_ptr)?);

        for (field, ptr) in response.fields.iter_mut().zip(field_ptrs.iter()) {
            field
                .values
                .push(extract_field(&mut response.arena, &doc, ptr));
        }
    }
    Ok(response)
}

fn extract_uuid_parts(v: &serde_json::Value, ptr: &Pointer) -> Result<flow::UuidParts, Error> {
    let v_uuid = ptr.query(&v).unwrap_or(&serde_json::Value::Null);
    v_uuid
        .as_str()
        .and_then(|s| uuid::Uuid::parse_str(s).ok())
        .and_then(|u| {
            if u.get_version_num() != 1 {
                return None;
            }
            let (c_low, c_mid, c_high, seq_node_id) = u.as_fields();

            Some(flow::UuidParts {
                clock: (c_low as u64) << 4          // Clock low bits.
            | (c_mid as u64) << 36                  // Clock middle bits.
            | (c_high as u64) << 52                 // Clock high bits.
            | ((seq_node_id[0] as u64) >> 2) & 0xf, // High 4 bits of sequence number.

                producer_and_flags: (seq_node_id[2] as u64) << 56 // 6 bytes of big-endian node ID.
            | (seq_node_id[3] as u64) << 48
            | (seq_node_id[4] as u64) << 40
            | (seq_node_id[5] as u64) << 32
            | (seq_node_id[6] as u64) << 24
            | (seq_node_id[7] as u64) << 16
            | ((seq_node_id[0] as u64) & 0x3) << 8 // High 2 bits of flags.
            | (seq_node_id[1] as u64), // Low 8 bits of flags.
            })
        })
        .ok_or_else(|| Error::InvalidUuid {
            value: v_uuid.clone(),
        })
}

pub fn extract_field(
    mut arena: &mut Vec<u8>,
    v: &serde_json::Value,
    ptr: &Pointer,
) -> flow::field::Value {
    let vv = ptr.query(v).unwrap_or(&serde_json::Value::Null);

    let mut out = flow::field::Value {
        kind: 0,
        unsigned: 0,
        signed: 0,
        double: 0.0,
        bytes: None,
    };

    match vv {
        serde_json::Value::Null => out.kind = flow::field::value::Kind::Null as i32,
        serde_json::Value::Bool(true) => out.kind = flow::field::value::Kind::True as i32,
        serde_json::Value::Bool(false) => out.kind = flow::field::value::Kind::False as i32,
        serde_json::Value::Number(n) => match estuary_json::Number::from(n) {
            estuary_json::Number::Float(d) => {
                out.kind = flow::field::value::Kind::Double as i32;
                out.double = d;
            }
            estuary_json::Number::Signed(s) => {
                out.kind = flow::field::value::Kind::Signed as i32;
                out.signed = s;
            }
            estuary_json::Number::Unsigned(u) => {
                out.kind = flow::field::value::Kind::Unsigned as i32;
                out.unsigned = u;
            }
        },
        serde_json::Value::String(s) => {
            out.kind = flow::field::value::Kind::String as i32;

            let begin = arena.len() as u32;
            arena.extend(s.as_bytes().iter()); // Send raw UTF-8 string.
            let end = arena.len() as u32;
            out.bytes = Some(flow::Slice { begin, end });
        }
        serde_json::Value::Array(_) => {
            out.kind = flow::field::value::Kind::Array as i32;

            let begin = arena.len() as u32;
            serde_json::to_writer(&mut arena, vv).unwrap();
            let end = arena.len() as u32;
            out.bytes = Some(flow::Slice { begin, end });
        }
        serde_json::Value::Object(_) => {
            out.kind = flow::field::value::Kind::Object as i32;

            let begin = arena.len() as u32;
            serde_json::to_writer(&mut arena, vv).unwrap();
            let end = arena.len() as u32;
            out.bytes = Some(flow::Slice { begin, end });
        }
    }
    out
}

#[cfg(test)]
mod test {
    use super::super::test::field_to_value;
    use super::{extract_field, extract_uuid_parts, flow, Error, Pointer};
    use serde_json::{json, Value};

    #[test]
    fn test_extraction_uuid_to_parts() {
        let v = json!({
            "_meta": {
                "uuid": "9f2952f3-c6a3-11ea-8802-080607050309",
            },
            "foo": "bar",
            "tru": true,
        });

        // "/_meta/uuid" maps to an encoded UUID. This fixture and the values
        // below are also used in Go-side tests.
        assert_eq!(
            extract_uuid_parts(&v, &Pointer::from("/_meta/uuid")).unwrap(),
            flow::UuidParts {
                producer_and_flags: 0x0806070503090000 + 0x02,
                clock: 0x1eac6a39f2952f32,
            },
        );
        // "/missing" maps to Null, which is the wrong type.
        match extract_uuid_parts(&v, &Pointer::from("/missing")) {
            Err(Error::InvalidUuid { value: Value::Null }) => {}
            p @ _ => panic!(p),
        }
        // "/foo" maps to "bar", also not a UUID.
        match extract_uuid_parts(&v, &Pointer::from("/foo")) {
            Err(Error::InvalidUuid {
                value: Value::String(s),
            }) if s == "bar" => {}
            p @ _ => panic!(p),
        }
        // "/tru" maps to true, of the wrong type.
        match extract_uuid_parts(&v, &Pointer::from("/tru")) {
            Err(Error::InvalidUuid {
                value: Value::Bool(b),
            }) if b => {}
            p @ _ => panic!(p),
        }
    }

    #[test]
    fn test_extraction_hashes_and_fields() {
        let v1 = serde_json::json!({
            "a": "value",
            "obj": {"tru": true, "other": "value"},
            "fals": false,
            "arr": ["foo"],
            "doub": 1.3,
            "unsi": 2,
            "sign": -30,
        });

        let cases = vec![
            ("/missing", json!(null), "xyz!"),
            ("/obj/tru", json!(true), "xyz!"),
            ("/fals", json!(false), "xyz!"),
            ("/arr/0", json!("foo"), "xyz!foo"),
            ("/unsi", json!(2), "xyz!"),
            ("/doub", json!(1.3), "xyz!"),
            ("/sign", json!(-30), "xyz!"),
            (
                "/obj",
                json!({"other":"value","tru":true}),
                r#"xyz!{"other":"value","tru":true}"#,
            ),
            ("/arr", json!(["foo"]), r#"xyz!["foo"]"#),
        ];
        for (ptr, expect_value, expect_arena) in cases {
            let mut arena = "xyz!".as_bytes().iter().copied().collect();
            let field = extract_field(&mut arena, &v1, &Pointer::from(ptr));
            assert_eq!(expect_value, field_to_value(&arena, &field),);
            assert_eq!(expect_arena.as_bytes(), &arena[..]);
        }
    }
}