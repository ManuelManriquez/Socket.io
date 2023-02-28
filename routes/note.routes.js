const note = require("../controllers/note.controller.js");

const router = [
  {
    url: "/notes",
    method: "GET",
    handler: note.getNotes,
  },
];

module.exports = router;