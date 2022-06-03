mod interface;
mod macros;
mod serialization;

use bin_layout::{Decoder, Encoder};
use macros::*;
use ErrorCode::*;
use Frame::*;

pub use interface::*;

#[derive(Clone)]
pub struct Text(String);

pub enum ErrorCode {
    NotDefined,
    FileNotFound,
    AccessViolation,
    DiskFull,
    IllegalOperation,
    UnknownTransferID,
    FileAlreadyExists,
    NoSuchUser,
}

#[derive(Encoder, Decoder, Clone)]
pub struct Request {
    pub filename: Text,
    pub mode: Text,
}

pub enum Frame<'a> {
    Read(Request),
    Write(Request),
    Data { block: u16, bytes: &'a [u8] },
    Acknowledge(u16),
    ErrMsg { code: ErrorCode, msg: Text },
}

//-------------------------------------------------------

impl Request {
    pub fn new<I: Into<String>>(filename: I, mode: I) -> Self {
        Self {
            filename: Text(filename.into()),
            mode: Text(mode.into()),
        }
    }
}
