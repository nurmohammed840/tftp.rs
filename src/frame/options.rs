use super::*;
// use std::{fmt, time::Duration};

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Options {
    pub blksize: u16,
    pub max_resend: u8,
    pub windowsize: u8,
    pub timeout: u8,
    pub fileds: Vec<(Text, Text)>,
}

impl Options {
    pub fn new() -> Self {
        Self {
            blksize: 1428,
            max_resend: 5,
            windowsize: 2,
            timeout: 7,
            fileds: Vec::new(),
        }
    }

    pub fn set<I: Into<String>>(&mut self, key: I, value: I) {
        let key = Text(key.into());
        let value = Text(value.into());

        match &mut self.fileds.iter_mut().find(|(k, _)| k == &key) {
            Some(entry) => entry.1 = value,
            None => self.fileds.push((key, value)),
        }
    }

    pub fn get(&self, key: impl Into<String>) -> Option<&String> {
        let key = key.into();
        self.fileds
            .iter()
            .find(|(k, _)| k.0 == key)
            .map(|(_, v)| &v.0)
    }

    pub fn remove(&mut self, key: impl Into<String>) -> Option<String> {
        let key = key.into();
        let list = &mut self.fileds;
        let index = list.iter().position(|(k, _)| k.0 == key)?;
        Some(list.remove(index).1.into_string())
    }
}

macro_rules! encode_opt {
    [$this: expr, $c: expr => $(($key: ident, $default: literal)),*] => {$(
        if $this.$key != $default {
            Text(stringify!($key).to_string()).encoder($c);
            Text($this.$key.to_string()).encoder($c);
        }
    )*};
}
macro_rules! decode_opt {
    [$opts: expr => $($key: ident),*] => {$(
        $opts.remove(stringify!($key))
            .and_then(|string| string.parse().ok())
            .map(|size| $opts.$key = size);
    )*};
}

impl Encoder for Options {
    fn encoder(self, c: &mut impl Array<u8>) {
        encode_opt!(self, c => 
            (blksize, 512),
            (max_resend, 5),
            (windowsize, 1),
            (timeout, 7)
        );
        for (key, value) in self.fileds {
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
        let mut opts = Options::new();
        decode_opt!(opts => blksize, max_resend, windowsize, timeout);
        Ok(opts)
    }
}