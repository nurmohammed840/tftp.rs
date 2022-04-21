### User Datagram Protocol

The main porpuse of UDP is to send messages between two computers.

| Field            | Type | 
| ---------------- | ---- |
| Source Port      | u16  |
| Destination Port | u16  |
| Length           | u16  |
| Checksum         | u16  |

#### Port number
Port numbers as a way to identify a service. 

Suppose you want to send a mail to your friend, his hotel address is "Main Street, Anytown, USA" and room number is "123", You can think street address as a _IP address_ and room number as a _Port number_.

#### Length 

Length field defines the length of the message in bytes. Maximum value of `u16` bit integer is 65535.

However, the actual length of the message is 65,507 bytes (65,535 − 8 bytes UDP header − 20 bytes IP header)

#### Checksum

The checksum field may be used for error-checking of the header and data. This field is optional in IPv4, and mandatory in IPv6.