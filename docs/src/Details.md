# Details

Client send a request to the server at port number 69, to read or write a file.

<div id="frame"></div>

### Request

The client first requests the server to read or write some data.
`Request` containing the filename, transfer mode and optionally any negotiated option.
(We willn't discuss those options in this tutorial)


### Data Transfer

Based on request, The server or client sends data to the other endpoint.

The data is sent in fixed length blocks of `512` bytes by default or the number specified in the blocksize negotiated option.

The last data block must be less than the negotiated or default blocksize (which is `512`) to signals the end of the transfer.

> _"What heppens when the last block is exact block sized data?"_

If that happens, endpoint sends `0` sized packet to signal the end of the transfer.

Initially, `block` number is `1`. On each transfer, the block number is incremented by one.

### Acknowledgement

Acknowledgement indicate that the data has been received.

An Endpoint must send an acknowledgement packet for each data packet received.
Acknowledgement number must be the same as the block number of the data packet.

### Error

Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas
