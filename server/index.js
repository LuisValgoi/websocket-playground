const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  socket.on("CUSTOM_MESSAGE", (message) => {
    console.log(message);
    io.emit("CUSTOM_MESSAGE", message);
  });
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));
