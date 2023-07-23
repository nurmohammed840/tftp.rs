mod common;

use common::recv_msg;
use databuf::Result;
use tftp::*;

fn main() -> Result<()> {
    let addr = ([127, 0, 0, 1], 6969);

    let mut request = Request::new(addr, Method::Read, Resource::new("filename.txt", "mode"));
    println!("Recv: {}", recv_msg(&request)?);

    request.method = Method::Write;
    request.send(&mut b"Hello, Server!".as_ref())
}
