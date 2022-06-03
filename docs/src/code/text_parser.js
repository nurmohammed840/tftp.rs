import { render } from "../assets/ch.min.js";
import theme from "https://esm.sh/shiki@0.10.1/themes/github-dark.json" assert { type: "json" }

let text_parser = `
<CH.Slideshow>

~~~rust
use bin_layout::*;
~~~

Asterisk \`*\` imports everything from the \`bin_layout\` crate.

---

~~~rust focus=3,5,9
use bin_layout::*;

struct Text(String);

impl Encoder for Text {
    fn encoder(self, arr: &mut impl Array<u8>) {
        todo!()
    }
}
~~~

A trait is some functions signature of some abstract type, In other languages it is also known as [interface](https://en.wikipedia.org/wiki/Interface_(computing)#In_object-oriented_languages)

---

~~~rust focus=6,8
use bin_layout::*;

struct Text(String);

impl Encoder for Text {
    fn encoder(self, arr: &mut impl Array<u8>) {
        todo!()
    }
}
~~~

Python 🐍 programmer can tell, it's a method because it takes \`self\` parameter.

\`&mut\` is a mutable reference, which mean Rust type system
guarantees that No one can modify it while we are modifying it.
Which eliminate whole class of 🐛 bugs!🪲 and data race.🏃‍♂️

\`impl Array<u8>\` is a generic type, Any abstract type that implement \`Array<u8>\` trait (like array of bytes: \`Vec<u8>\`) can call this function.

---

~~~rust focus=7,8
use bin_layout::*;

struct Text(String);

impl Encoder for Text {
    fn encoder(self, arr: &mut impl Array<u8>) {
        arr.extend_from_slice(self.0);
        arr.push(0);
    }
}
~~~

\`extend_from_slice\` copy the content of \`self.0\` (\`String\`) to \`arr\`.
Let's push a trailing \`0\` to indicate end of string.

---

~~~rust focus=6:7,9:10
        arr.extend_from_slice(self.0);
        arr.push(0);
    }
}

impl<E: Error> Decoder<'_, E> for Text {
    fn decoder(c: &mut Cursor<&[u8]>) -> Result<Self, E> {
        todo!()
    }
}
~~~

\`decoder\` function takes a \`Cursor<&[u8]>\` and return \`Result<Self, E>\`.

[Result](https://doc.rust-lang.org/std/result/enum.Result.html) is an build-in enum that can be either \`Ok(T)\` or \`Err(E)\`.

---

~~~rust focus=3:8
impl<E: Error> Decoder<'_, E> for Text {
    fn decoder(c: &mut Cursor<&[u8]>) -> Result<Self, E> {
        let bytes: Vec<u8> = c
            .remaining_slice().iter()
            .take_while(|&b| *b != 0).copied()
            .collect();
        
        c.offset += bytes.len() + 1;

    }
}
~~~

Let's iterate over remaining bytes and copy all bytes until \`0\` is found, \`collect()\` each bytes into new \`Vec<u8>\`.

Then increment the cursor offset by the length of the array + 1 (trailing \`0\` byte).

---

~~~rust focus=9
impl<E: Error> Decoder<'_, E> for Text {
    fn decoder(c: &mut Cursor<&[u8]>) -> Result<Self, E> {
        let bytes: Vec<u8> = c
            .remaining_slice().iter()
            .take_while(|&b| *b != 0).copied()
            .collect();

        c.offset += bytes.len() + 1;
        let string = String::from_utf8(bytes).map_err(E::from_utf8_err)?;
    }
}
~~~

\`String::from_utf8\` may return error, if the bytes are not valid UTF-8.
\`map_err(..)\` method converts error to custom error type \`E: Error\`.

In Rust, there is no \`try/catch\` block. Instead, pattern match is used to handle error.
Question mark \`?\` operator is a shortcut for,

~~~rust
let val = match err { 
    Ok(val) => val,
    Err(err) => return Err(err),
}
~~~

---

~~~rust focus=10
impl<E: Error> Decoder<'_, E> for Text {
    fn decoder(c: &mut Cursor<&[u8]>) -> Result<Self, E> {
        let bytes: Vec<u8> = c
            .remaining_slice().iter()
            .take_while(|&b| *b != 0).copied()
            .collect();

        c.offset += bytes.len() + 1;
        let string = String::from_utf8(bytes).map_err(E::from_utf8_err)?;
        Ok(Text(string))
    }
}
~~~

last expression without \`;\` is returned from function.

</CH.Slideshow>
`

render("text_parser", text_parser, { theme });