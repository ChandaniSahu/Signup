const mongoose = require("mongoose");
const NoteSchema = new mongoose.Schema({
  objId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Note = new mongoose.model("Note", NoteSchema);
module.exports = Note;
