use super::*;
use std::fmt;

#[derive(Clone, PartialEq, Eq)]
pub struct Options(Vec<(Text, Text)>);

impl Options {
    pub fn new() -> Self {
        Self(vec![
            ("blksize".into(), "1428".into()),
            ("timeout".into(), "7".into()),
        ])
    }

    pub fn set<I: Into<String>>(&mut self, key: I, value: I) {
        let list = &mut self.0;
        let key = Text(key.into());
        let value = Text(value.into());

        match list.iter_mut().find(|(k, _)| k == &key) {
            Some(entry) => entry.1 = value,
            None => list.push((key, value)),
        }
    }

    pub fn get(&self, key: impl Into<String>) -> Option<&String> {
        let key = key.into();
        self.0.iter().find(|(k, _)| k.0 == key).map(|(_, v)| &v.0)
    }
}

impl Encoder for Options {
    fn encoder(self, c: &mut impl Array<u8>) {
        for (key, value) in self.0 {
            key.encoder(c);
            value.encoder(c);
        }
    }
}

impl<E: Error> Decoder<'_, E> for Options {
    fn decoder(c: &mut Cursor<&[u8]>) -> Result<Self, E> {
        let mut list = vec![];
        while !c.remaining_slice().is_empty() {
            list.push((Text::decoder(c)?, Text::decoder(c)?));
        }
        Ok(Options(list))
    }
}

impl fmt::Debug for Options {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_map()
            .entries(self.0.iter().map(|(k, v)| (k, v)))
            .finish()
    }
}
