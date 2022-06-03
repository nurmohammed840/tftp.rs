import { render } from "../assets/ch.min.js";
import theme from "https://esm.sh/shiki@0.10.1/themes/github-dark.json" assert { type: "json" }

let frame = `~~~rust
struct Request {
    filename: Text,
    mode: Text
}

enum Frame<'a> {
    Read(Request),
    Write(Request),
    Data { block: u16, bytes: &'a [u8] },
    Acknowledge(u16),
    ErrMsg { code: ErrorCode, msg: Text },
}
~~~`

let errcode = `~~~rust
enum ErrorCode {
    NotDefined,
    FileNotFound,
    AccessViolation,
    DiskFull,
    IllegalOperation,
    UnknownTransferID,
    FileAlreadyExists,
    NoSuchUser,
}
~~~`

render("frame", frame, { theme });
render("err_code", errcode, { theme });