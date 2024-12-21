const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    status: { type: String, enum: ['Want to Read', 'Reading', 'Completed'] },
    userId: mongoose.Schema.Types.ObjectId
});
module.exports = mongoose.model('Book', bookSchema);