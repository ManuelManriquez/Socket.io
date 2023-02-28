const note = require("../models/note.model.js");

const getNotes = async (req, res) => {
    const notes = await note.find();
    return res.code(200).send(notes);
}

module.exports = {getNotes};