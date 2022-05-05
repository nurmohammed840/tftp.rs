## Frame Layout

We need to know what type of packet it is. `opcode` defines the type of the packet. `opcode` is 2 bytes long.

| Frame Type     | Opcode |
| -------------- | :----: |
| Read request   |   1    |
| Write request  |   2    |
| Data           |   3    |
| Acknowledgment |   4    |
| Error          |   5    |
