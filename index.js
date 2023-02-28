// require("dotenv").config();
// require("./utils/mongoose");
// const path = require("path");

// const noteRoutes = require("./routes/note.routes");
// const fastify = require("fastify")({
//   logger: true,
// });

// fastify.get("/", (req, res) => {
//   res.send({ hello: "world" });
// });

// fastify.get("/public", function (req, reply) {
//   reply.sendFile("index.html");
// });

// noteRoutes.forEach((route) => {
//   fastify.route(route);
// });

// const start = async () => {
//   await fastify.listen({ port: process.env.PORT });
// };

// fastify.register(require("@fastify/static"), {
//   root: path.join(__dirname, "public"),
//   prefix: "/public/", // optional default: '/'
// });
// fastify.register(require("fastify-socket.io"));

// start();

require("dotenv").config();
const fastify = require("fastify")();

fastify.register(require("fastify-socket.io"), {
  // put your options here
});

fastify.get("/", (req, reply) => {
  fastify.io.emit("hello");
  reply.send("helloo");
});

const start = async () => {
  await fastify.listen({ port: process.env.PORT });
};

start();
