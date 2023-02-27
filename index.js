require("dotenv").config();

const path = require("path");
const express = require("express");
const socketio = require("socket.io");
const { SocketAddress } = require("net");
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(app.get("port"), () => {
  console.log(`listening on port ${process.env.PORT}`);
});

const io = socketio(server);

io.on("connection", (socket) => {
  console.log("new connection", socket.id);

  socket.on("chat:message", (chat) => {
    io.sockets.emit("chat:message", chat);
  });
});
