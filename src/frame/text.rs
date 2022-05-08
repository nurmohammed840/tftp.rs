use bin_layout::*;
use std::fmt;

#[derive(Clone, PartialEq, Eq)]
pub struct Text(pub String);

impl Encoder for Text {
    fn encoder(self, c: &mut impl Array<u8>) {
        c.extend_from_slice(self.0);
        c.push(0);
    }
}

impl<E: Error> Decoder<'_, E> for Text {
    fn decoder(c: &mut Cursor<&[u8]>) -> Result<Self, E> {
        let bytes: Vec<u8> = c
            .remaining_slice()
            .iter()
            .take_while(|&b| *b != 0)
            .copied()
            .collect();

        c.offset += bytes.len() + 1;
        let string = String::from_utf8(bytes).map_err(E::from_utf8_err)?;
        Ok(Text(string))
    }
}

impl<T: Into<String>> From<T> for Text {
    fn from(data: T) -> Self {
        Text(data.into())
    }
}
impl std::ops::Deref for Text {
    type Target = String;
    fn deref(&self) -> &Self::Target {
        &self.0
    }
}
impl fmt::Debug for Text {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

#[test]
fn text_perser() {
    let text: Text = "Hello\0World".into();
    let encoded = text.clone().encode();
    let mut cursor = Cursor::new(encoded.as_ref());

    let hello: Result<_, ()> = Text::decoder(&mut cursor);
    let world: Result<_, ()> = Text::decoder(&mut cursor.remaining_slice().into());

    assert_eq!(hello.unwrap(), "Hello".into());
    assert_eq!(world.unwrap(), "World".into());
}