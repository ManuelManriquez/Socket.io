const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost/fastify-socketio")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
