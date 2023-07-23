mod common;

use common::recv_msg;
use databuf::Result;
use tftp::*;

fn main() -> Result<()> {
    let mut server = Server::bind("0.0.0.0:6969")?;
    println!("Server Listening at {}", server.socket.local_addr()?);

    loop {
        let request = server.accept()?;
        let addr = request.addr;

        match request.method() {
            Method::Read => request.send(&mut "Hello, World!".as_bytes())?,
            Method::Write => println!("From: {addr}, Recv: {}", recv_msg(&request)?),
        }
    }
}
