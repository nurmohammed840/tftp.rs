## Frame Layout

We need to know what type of packet it is. `opcode` defines the type of the packet. `opcode` is 2 bytes long.

| Frame Type     | Opcode |
| -------------- | :----: |
| Read request   |   1    |
| Write request  |   2    |
| Data           |   3    |
| Acknowledgment |   4    |
| Error          |   5    |


<div id="frame_encoder"></div>

<!-- First we map the opcode from frame type. -->
First, let's extract the opcode by matching the frame type.

`..` Operator means, we are not interested in the rest of the fields.

<div id="frame_decoder"></div>

`'a` isn't a generic parameter. It's called lifetime. lifetime describes how long a reference to a value will be valid.

In order to remove unused memory, Program need some kind of tracking system. One way is to manage the memory manually. But any common mistake can lead to security vulnerability and cause serious bugs.

Other approach is to track unused memory at runtime. [Garbage Collector](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) is a program that reclaims unused memory. Another runtime approach is to use [smart pointers](https://en.wikipedia.org/wiki/Smart_pointer) (for example [reference counting](https://en.wikipedia.org/wiki/Reference_counting)). But any runtime approach has some overhead.

Rust avoid garbage collection and manually manage memory by introducing some strict rules ([Ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html) and [Borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)) that must be followed.
This isn't tutorial about lifetime and borrowing, So I just explained the need for a lifetime.

<link rel="stylesheet" href="./assets/code.css">
<script type="module" src="./code/frame_decoder.js"></script>
