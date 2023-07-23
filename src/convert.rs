use super::*;
use std::{fmt, ops::Deref};

impl<T: Into<String>> From<T> for Text {
    fn from(value: T) -> Self {
        Text(value.into())
    }
}

impl<T: Into<Vec<u8>>> From<T> for Bytes {
    fn from(value: T) -> Self {
        Bytes(value.into())
    }
}

impl Deref for Text {
    type Target = str;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl Deref for Bytes {
    type Target = [u8];

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        self.reason.0.fmt(f)
    }
}
impl std::error::Error for Error {}
