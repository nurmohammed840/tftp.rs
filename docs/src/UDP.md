## User Datagram Protocol

TFTP uses UDP to transfer it's data. So basic understanding of UDP is required. Let's look at the UDP header.

| Field            | Type |
| ---------------- | ---- |
| Source Port      | u16  |
| Destination Port | u16  |
| Length           | u16  |
| Checksum         | u16  |

The main porpuse of UDP is to send messages between two computers.

- _Port number_: Port numbers as a way to identify a service. 
  Suppose you want to send a mail to your friend, his hotel address is "Main Street, Anytown, USA" and room number is "123", You can think street address as a _IP address_ and room number as a _Port number_.

- _Length_: Length field defines the length of the message in bytes. Maximum value of `u16` bit integer is 65535.
  However, the actual length of the message is 65,507 bytes* (65,535 − 8 bytes UDP header − 20 bytes IP header)

- _Checksum_: The checksum field may be used for error-checking of the header and data. This field is optional in IPv4, and mandatory in IPv6.

That's it! And I am hesitanted to call it as a protocol!

Rust standard library has high level API and excellent [documentation](https://doc.rust-lang.org/stable/std/net/struct.UdpSocket.html), 
So I don't need to explain how to use UDP.

In this tutorial, We will use three fundamental functions of UDP socket:

1. [`bind()`](https://doc.rust-lang.org/stable/std/net/struct.UdpSocket.html#method.bind) - create a [socket](https://man7.org/linux/man-pages/man7/socket.7.html) and [bind](https://man7.org/linux/man-pages/man2/bind.2.html) it to a address.
2. [`send_to()`](https://doc.rust-lang.org/stable/std/net/struct.UdpSocket.html#method.send_to) - Sends data to a specified address.
3. [`recv_from()`](https://doc.rust-lang.org/stable/std/net/struct.UdpSocket.html#method.recv_from) - Receives a single datagram message on the socket. On success, returns the number of bytes read and the origin.