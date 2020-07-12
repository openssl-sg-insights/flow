use std::path::Path;
use std::process::{self, Command};
use std::str;
use tonic_build;

fn main() {
    let mut proto_include = Vec::new();

    let go_modules = &[
        "go.gazette.dev/core",
        "github.com/gogo/protobuf",
        "github.com/golang/protobuf", // Remove?
    ];
    for module in go_modules {
        let go_list = Command::new("/usr/local/go/bin/go")
            .args(&["list", "-f", "{{ .Dir }}", "-m", module])
            .stderr(process::Stdio::inherit())
            .output()
            .expect("failed to run 'go'");

        if !go_list.status.success() {
            panic!("go list go.gazette.dev/core failed");
        }

        let dir = str::from_utf8(&go_list.stdout).unwrap().trim_end();
        proto_include.push(Path::new(dir).to_owned());
    }

    println!("proto_include: {:?}", proto_include);
    let broker_proto = proto_include[0].join("broker/protocol/protocol.proto");

    tonic_build::configure()
        .build_server(false)
        //.out_dir(Path::new(&std::env::var("CARGO_MANIFEST_DIR").unwrap()).join("src"))
        .compile(&[broker_proto], &proto_include)
        .expect("failed to compile protobuf");
}