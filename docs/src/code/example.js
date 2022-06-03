import { render } from "../assets/ch.min.js";
import theme from "https://esm.sh/shiki@0.10.1/themes/github-dark.json" assert { type: "json" }

let example = `~~~rust
use tftp::*;
use bin_layout::Encoder;
use std::{thread, io::Result, time::Duration};

fn recv_msg(ctx: Context) -> String {
    let mut writer = Vec::new();
    ctx.recv_data(&mut writer).unwrap();
    String::from_utf8(writer).unwrap()
}

fn server() -> Result<()> {
    let mut server = Server::listen("0.0.0.0:69");
    println!("Server Listening at {}", server.socket.local_addr()?);
    loop {
        let ctx = server.accept()?;
        let addr = ctx.addr;
        match ctx.method {
            Method::Read => {
                let bytes = ctx.req.clone().encode();
                ctx.send_data(&mut bytes.as_slice())?
            }
            Method::Write => println!("Server Recv: {:?} From: {addr}", recv_msg(ctx))
        }
    }
}

fn main() {
    thread::spawn(server);
    thread::sleep(Duration::from_millis(100));

    let addr = "127.0.0.1:69".parse().unwrap();
    let req = Request::new("This message must echo from server", "!");

    let ctx = Context { addr, method: Method::Read, req };
    println!("Client Recv: {}", recv_msg(ctx));

    let ctx = Context { addr, method: Method::Write, req: Request::new("", "") };
    ctx.send_data(&mut b"Hello, Server!".as_ref()).unwrap();
}
~~~`

render("example", example, { theme }).catch(console.error);