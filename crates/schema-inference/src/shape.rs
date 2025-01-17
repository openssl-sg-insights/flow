use doc::inference::{ArrayShape, ObjProperty, ObjShape, Shape};
use itertools::{EitherOrBoth, Itertools};
use json::schema::types;

/// We _merge_ rather than _union_ Shapes together. This allows us to retain all
/// inference information we've gathered up to that point, where _union_ would
/// potentially discard valid inferences as being of `any` type. Many of the
/// more advanced json schema attributes are ignored, as we will never infer
/// them from data.
pub fn merge(lhs: Shape, rhs: Shape) -> Shape {
    let array = match (
        lhs.type_.overlaps(types::ARRAY),
        rhs.type_.overlaps(types::ARRAY),
    ) {
        (true, true) => merge_array_shapes(lhs.array, rhs.array),
        (_, false) => lhs.array,
        (false, true) => rhs.array,
    };

    let object = match (
        lhs.type_.overlaps(types::OBJECT),
        rhs.type_.overlaps(types::OBJECT),
    ) {
        (true, true) => merge_obj_shapes(lhs.object, rhs.object),
        (_, false) => lhs.object,
        (false, true) => rhs.object,
    };

    Shape {
        type_: lhs.type_ | rhs.type_,
        array,
        object,
        ..Default::default()
    }
}

fn merge_obj_shapes(lhs: ObjShape, rhs: ObjShape) -> ObjShape {
    // Derive the super-set of properties of both sides. Since we are trying
    // to generate maximally descriptive schemas, not validate, we want to
    // retain all inferences. This means that we'll retain inferred schemas, but
    // mark them as `!required` rather than assuming they are `any`.
    let properties = itertools::merge_join_by(
        lhs.properties.into_iter(),
        rhs.properties.into_iter(),
        |l, r| Ord::cmp(&l.name, &r.name),
    )
    .map(|eob| match eob {
        EitherOrBoth::Both(l, r) => ObjProperty {
            name: l.name,
            is_required: l.is_required && r.is_required,
            shape: merge(l.shape, r.shape),
        },
        EitherOrBoth::Left(l) => ObjProperty {
            name: l.name,
            is_required: false,
            shape: l.shape,
        },
        EitherOrBoth::Right(r) => ObjProperty {
            name: r.name,
            is_required: false,
            shape: r.shape,
        },
    })
    .collect::<Vec<ObjProperty>>();

    ObjShape {
        properties,
        patterns: vec![],
        additional: None,
    }
}

fn merge_array_shapes(lhs: ArrayShape, rhs: ArrayShape) -> ArrayShape {
    // Deeply _merge_ arrays. This is necessary as _union_ would not properly
    // merge shapes nested inside this array.
    let tuple = lhs
        .tuple
        .into_iter()
        .zip_longest(rhs.tuple.into_iter())
        .map(|eob| match eob {
            EitherOrBoth::Both(l, r) => merge(l, r),
            EitherOrBoth::Left(l) => l,
            EitherOrBoth::Right(r) => r,
        })
        .collect::<Vec<Shape>>();

    ArrayShape {
        min: None,
        max: None,
        tuple,
        additional: None,
    }
}
