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

#[test]
fn request_parser() {
    let req = Request::new("name", "mode");
    let encoded = req.clone().encode();
    let mut cursor = Cursor::new(encoded.as_ref());
    let decoded: Result<_, ()> = Request::decoder(&mut cursor);

    assert!(cursor.remaining_slice().is_empty());
    assert_eq!(decoded.unwrap(), req);
}
