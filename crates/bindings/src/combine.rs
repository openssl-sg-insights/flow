use crate::service::{self, Channel};
use derive::combine_api::API;

#[no_mangle]
pub extern "C" fn combine_create(log_level: i32, log_dest_fd: i32) -> *mut Channel {
    service::create::<API>(log_level, log_dest_fd)
}
#[no_mangle]
pub extern "C" fn combine_invoke1(ch: *mut Channel, i: service::In1) {
    service::invoke::<API, _>(ch, i)
}
#[no_mangle]
pub extern "C" fn combine_invoke4(ch: *mut Channel, i: service::In4) {
    service::invoke::<API, _>(ch, i)
}
#[no_mangle]
pub extern "C" fn combine_invoke16(ch: *mut Channel, i: service::In16) {
    service::invoke::<API, _>(ch, i)
}
#[no_mangle]
pub extern "C" fn combine_drop(ch: *mut Channel) {
    service::drop::<API>(ch)
}
