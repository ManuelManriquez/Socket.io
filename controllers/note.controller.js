const Note = require("../models/note.model.js");

const getNotes = async (req, res) => {
  const notes = await Note.find();
  return res.code(200).send(notes);
};

const postNote = async (req, res) => {
  const newNote = new Note(req.body);
  await newNote.save();
  return res.code(200).send(newNote);
};

module.exports = { getNotes, postNote };
