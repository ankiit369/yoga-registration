const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    name: String,
    age: Number,
    contact: String,
    batch: String
});

module.exports = mongoose.model('Participant', participantSchema);
