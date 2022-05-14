#![allow(unused_must_use)]
use std::{io::*, thread, time::Duration};
use tftp::*;

fn server() -> Result<()> {
    let mut server = Server::listen("127.0.0.1:69");
    println!("Server Listening at {}", server.socket.local_addr()?);

    let ctx = server.accept()?;
    println!("Server got {:?} request from client: {}", ctx.method, ctx.addr);

    match ctx.method {
        Method::Read => ctx.send_data(&mut Cursor::new("Hello, Client!"))?,
        Method::Write => println!("Server Recv: {:#?}", recv_msg(ctx)),
    }
    Ok(())
}

fn client(method: Method) -> Result<()> {
    thread::sleep(Duration::from_millis(10));
    let ctx = Context {
        req: Request::new("filename", "mode"),
        method,
        addr: "127.0.0.1:69".parse().unwrap(),
    };

    println!("Client Sending {method:?} request to server.");
    
    match method {
        Method::Read => println!("Client Recv: {:#?}", recv_msg(ctx)),
        Method::Write => ctx.send_data(&mut Cursor::new("Hello, Server!"))?
    }
    Ok(())
}

fn recv_msg(ctx: Context) -> String {
    let mut writer = Vec::new();
    ctx.recv_data(&mut writer).unwrap();
    String::from_utf8(writer).unwrap()
}

fn run(method: Method) {
    let server = thread::spawn(server);
    let client = thread::spawn(move || client(method));
    server.join().unwrap();
    client.join().unwrap();
}

fn main() {
    println!("\n Client ---> Server \n");
    run(Method::Read);

    println!("\n Client <--- Server \n");
    run(Method::Write);
}
