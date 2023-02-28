require("dotenv").config();
require("./utils/mongoose");

const noteRoutes = require("./routes/note.routes");

const fastify = require("fastify")({
  logger: true,
});

fastify.get("/", (req, res) => {
  res.send({ hello: "world" });
});

noteRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  await fastify.listen({ port: process.env.PORT });
};

start();
