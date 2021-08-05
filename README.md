# Objective

This repository is dedicated to learn more about the usage of WebSockets.

# Reference

[https://www.youtube.com/watch?v=1BfCnjr_Vjg&ab_channel=Fireship](https://www.youtube.com/watch?v=1BfCnjr_Vjg&ab_channel=Fireship)

# What is

- it enables you to build real-time features between a client & server

# Example

- multiplayer game
- telefone communication

# Process

1 - client sends an HTTP open-connection request

```bash
GET ws://some-url HTTP/1.1
Connection: Upgrade
Upgrade: websocket
```

2 - if the server agrees, it sends an accept response

```bash
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

3 - handshake is complete. 

4 - A `TCP/IP` is left opened and allows bi-directional data exchange with low latency (aka `FULL-DUPLEX`) 

5 - It will stay open until one of the party drops off