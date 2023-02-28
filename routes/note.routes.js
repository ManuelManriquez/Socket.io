const note = require("../controllers/note.controller.js");

const router = [
  {
    url: "/notes",
    method: "GET",
    handler: note.getNotes,
  },
  {
    url: "/notes",
    method: "POST",
    handler: note.postNote,
  },
];

module.exports = router;