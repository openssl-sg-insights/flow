//! DO NOT EDIT THIS FILE!
//! This file is generated by regenerate-tests.sh based on the official
//! test cases in the submodule.

mod validator_test_utils;
use validator_test_utils::run_draft09_test;

#[test]
fn test_d09_additional_items() {
    run_draft09_test("additionalItems.json");
}

#[test]
fn test_d09_additional_properties() {
    run_draft09_test("additionalProperties.json");
}

#[test]
fn test_d09_all_of() {
    run_draft09_test("allOf.json");
}

#[test]
fn test_d09_anchor() {
    run_draft09_test("anchor.json");
}

#[test]
fn test_d09_any_of() {
    run_draft09_test("anyOf.json");
}

#[test]
fn test_d09_boolean_schema() {
    run_draft09_test("boolean_schema.json");
}

#[test]
fn test_d09_const() {
    run_draft09_test("const.json");
}

#[test]
fn test_d09_contains() {
    run_draft09_test("contains.json");
}

#[test]
fn test_d09_default() {
    run_draft09_test("default.json");
}

#[test]
fn test_d09_defs() {
    run_draft09_test("defs.json");
}

#[test]
fn test_d09_dependent_required() {
    run_draft09_test("dependentRequired.json");
}

#[test]
fn test_d09_dependent_schemas() {
    run_draft09_test("dependentSchemas.json");
}

#[test]
fn test_d09_enum() {
    run_draft09_test("enum.json");
}

#[test]
fn test_d09_exclusive_maximum() {
    run_draft09_test("exclusiveMaximum.json");
}

#[test]
fn test_d09_exclusive_minimum() {
    run_draft09_test("exclusiveMinimum.json");
}

#[test]
fn test_d09_format() {
    run_draft09_test("format.json");
}

#[test]
fn test_d09_id() {
    run_draft09_test("id.json");
}

#[test]
fn test_d09_if_then_else() {
    run_draft09_test("if-then-else.json");
}

#[test]
fn test_d09_items() {
    run_draft09_test("items.json");
}

#[test]
fn test_d09_max_contains() {
    run_draft09_test("maxContains.json");
}

#[test]
fn test_d09_maximum() {
    run_draft09_test("maximum.json");
}

#[test]
fn test_d09_max_items() {
    run_draft09_test("maxItems.json");
}

#[test]
fn test_d09_max_length() {
    run_draft09_test("maxLength.json");
}

#[test]
fn test_d09_max_properties() {
    run_draft09_test("maxProperties.json");
}

#[test]
fn test_d09_min_contains() {
    run_draft09_test("minContains.json");
}

#[test]
fn test_d09_minimum() {
    run_draft09_test("minimum.json");
}

#[test]
fn test_d09_min_items() {
    run_draft09_test("minItems.json");
}

#[test]
fn test_d09_min_length() {
    run_draft09_test("minLength.json");
}

#[test]
fn test_d09_min_properties() {
    run_draft09_test("minProperties.json");
}

#[test]
fn test_d09_multiple_of() {
    run_draft09_test("multipleOf.json");
}

#[test]
fn test_d09_not() {
    run_draft09_test("not.json");
}

#[test]
fn test_d09_one_of() {
    run_draft09_test("oneOf.json");
}

#[test]
fn test_d09_pattern() {
    run_draft09_test("pattern.json");
}

#[test]
fn test_d09_pattern_properties() {
    run_draft09_test("patternProperties.json");
}

#[test]
fn test_d09_properties() {
    run_draft09_test("properties.json");
}

#[test]
fn test_d09_property_names() {
    run_draft09_test("propertyNames.json");
}

#[test]
fn test_d09_ref() {
    run_draft09_test("ref.json");
}

#[test]
fn test_d09_ref_remote() {
    run_draft09_test("refRemote.json");
}

#[test]
fn test_d09_required() {
    run_draft09_test("required.json");
}

#[test]
fn test_d09_type() {
    run_draft09_test("type.json");
}

#[test]
fn test_d09_unevaluated_items() {
    run_draft09_test("unevaluatedItems.json");
}

#[test]
fn test_d09_unevaluated_properties() {
    run_draft09_test("unevaluatedProperties.json");
}

#[test]
fn test_d09_unique_items() {
    run_draft09_test("uniqueItems.json");
}
