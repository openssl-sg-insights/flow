//! The [W3C Extended Log format](https://www.w3.org/TR/WD-logfile.html) is a made specifically for
//! http server logs. It's essentially just a tab-separated values file, with a few extra
//! differences. The main thing being that the column headers appear in a special `#Fields`
//! directive instead just being on the first row. Also, nulls are represented as `-`.
use super::{Column, CsvOutput};
use crate::format::{Output, ParseError, Parser};
use crate::input::Input;
use std::io::BufRead;

#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error("file is missing the required #Fields directive")]
    MissingFields,
    #[error("file headers are malformed")]
    InvalidHeader,

    #[error("invalid encoding of log file")]
    InvalidEncoding(#[from] std::str::Utf8Error),

    #[error("reading input: {0}")]
    Io(#[from] std::io::Error),
}

pub fn new_w3c_extended_log_parser() -> Box<dyn Parser> {
    Box::new(W3cLogParser)
}
pub struct W3cLogParser;

/// A parsed directive from the header of a log file.
#[allow(dead_code)]
struct Directive {
    name: String,
    value: String,
}

/// Represents the parsed header of a W3C extended log file, which is a series of directives.
/// The `#Fields` directive is the only one that's significant to parsing the rest of the file,
/// but all the other directives are preserved here so that they can be added to the output
/// documents if desired.
struct FileHeader {
    fields: Vec<String>,
    other_directives: Vec<Directive>,
}

impl W3cLogParser {
    fn parse_header(input: &[u8]) -> Result<FileHeader, Error> {
        let mut header = FileHeader {
            fields: Vec::new(),
            other_directives: Vec::new(),
        };
        for result in input.lines() {
            let line = result?;
            if !line.starts_with("#") {
                break;
            }
            let line = &line[1..];
            let (name, rem) = line.split_once(':').ok_or_else(|| Error::InvalidHeader)?;
            let name = name.trim();
            tracing::debug!(%name, value = %rem, "parsed w3c extended log directive");
            if name == "Fields" {
                header.fields = rem.split_ascii_whitespace().map(String::from).collect();
            } else {
                header.other_directives.push(Directive {
                    name: name.to_string(),
                    value: rem.trim().to_string(),
                })
            }
        }
        if header.fields.is_empty() {
            Err(Error::MissingFields)
        } else {
            Ok(header)
        }
    }
}

impl Parser for W3cLogParser {
    fn parse(&self, content: Input) -> Result<Output, ParseError> {
        // We'll peek at a up to 8KiB in order to try to parse the header. The Fields directive is
        // the only thing we really _need_ from the header, and that's always supposed to be the
        // second directive (right after Version). So practically, this should always be enough,
        // even if there's hundreds of columns.
        let (prefix, input) = content.peek(8192)?;
        let header =
            W3cLogParser::parse_header(&prefix).map_err(|e| ParseError::Parse(Box::new(e)))?;
        // TODO: (optionally) add the extra directives from header as fields to each json object.

        let headers = resolve_headers(header.fields);

        let reader = csv::ReaderBuilder::new()
            .delimiter(b'\t')
            // Configure the CSV reader to ignore lines that start with a `#`, so that we don't
            // need to skip ahead after parsing the headers.
            .comment(Some(b'#'))
            .has_headers(false)
            .from_reader(input.into_stream());

        Ok(Box::new(CsvOutput::new(headers, reader)))
    }
}

/// Associates each field in the file to a `Column` containing the expected type. The set of fields
/// with numeric types is hard-coded based on the docs at: https://www.w3.org/TR/WD-logfile.html
/// and augmented with a few additional fields taken from an example log file of unknown
/// provenance. If that sounds a little sketchy to you, that's because it is. We might need to
/// revisit this, but it seems like a fairly reasonable starting point, since the
fn resolve_headers(fields: Vec<String>) -> Vec<Column> {
    use json::schema::types;
    fields
        .into_iter()
        .map(|field| {
            // Check if this field is one of the known integer or fractional fields.
            let column_type = {
                // If the field name matches a known prefix, then first strip off that prefix and
                // match against the remainder.
                let match_ident = match field.split_once('-') {
                    Some(("c" | "s" | "r" | "cs" | "sc" | "sr" | "rs" | "x", ident)) => ident,
                    _ => field.as_str(),
                };
                match match_ident {
                    "bytes" | "cached" | "content-len" | "count" | "interval" | "port"
                    | "status" => types::INTEGER,
                    "time-taken" | "time-to-first-byte" => types::INT_OR_FRAC,
                    _ => types::STRING,
                }
            };

            Column {
                name: field,
                allowed_types: column_type | types::NULL,
                null_sentinels: &["-"],
            }
        })
        .collect()
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::input::Input;

    const VALID_FILE: &[u8] = include_bytes!("../../../tests/examples/w3c-extended-log");

    #[test]
    fn w3c_extended_log_file_is_parsed() {
        let input = Input::Stream(Box::new(std::io::Cursor::new(VALID_FILE)));
        // Pass an explicit schema to make sure that types get parsed. In particular, - won't get
        // interpreted as null unless the schema specifically allows it.
        let parser = new_w3c_extended_log_parser();
        let mut output = parser.parse(input).expect("parse failed");
        let first = output
            .next()
            .expect("first row should be Some")
            .expect("first result should be ok");

        let expected = serde_json::json!({
            "c-ip": "1.2.3.4",
            "c-port": 45170,
            "cs(Cookie)": null,
            "cs(Host)": "wat.now.test",
            "cs(Referer)": null,
            "cs(User-Agent)": "Mozilla/5.0",
            "cs-bytes": 129,
            "cs-method": "GET",
            "cs-protocol": "https",
            "cs-protocol-version": "HTTP/1.0",
            "cs-uri-query": null,
            "cs-uri-stem": "/",
            "date": "2021-09-07",
            "fle-encrypted-fields": null,
            "fle-status": null,
            "sc-bytes": 535,
            "sc-content-len": 58,
            "sc-content-type": "application/json",
            "sc-range-end": null,
            "sc-range-start": null,
            "sc-status": 404,
            "ssl-cipher": "TLS_AES_128_GCM_SHA256",
            "ssl-protocol": "TLSv1.3",
            "time": "20:02:43",
            "time-taken": 0.422,
            "time-to-first-byte": 0.422,
            "x-edge-detailed-result-type": "Error",
            "x-edge-location": "wat-edge-location",
            "x-edge-request-id": "some-bytes",
            "x-edge-response-result-type": "Error",
            "x-edge-result-type": "Error",
            "x-forwarded-for": null,
            "x-host-header": "api-sandbox.foo.com",
        });
        assert_eq!(expected, first);
    }
}
