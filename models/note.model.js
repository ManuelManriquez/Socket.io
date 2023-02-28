const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    title: String,
    text: String,
  },
  { timestamps: true }
);

module.exports = model('note', noteSchema);
