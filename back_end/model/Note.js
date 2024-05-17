const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    time: { type:Date, default:Date.now},
    text: {type: String, default: ''},
    color: {type: String}
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;