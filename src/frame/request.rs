use super::*;

#[derive(Debug, Clone, PartialEq, Eq, Encoder, Decoder)]
pub struct Request {
    pub filename: Text,
    pub mode: Text,
    pub options: Options,
}

impl Request {
    pub fn new<I: Into<String>>(name: I, mode: I) -> Self {
        Self {
            filename: Text(name.into()),
            mode: Text(mode.into()),
            options: Options::new(),
        }
    }
}