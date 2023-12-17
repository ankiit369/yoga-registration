const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    participantId: mongoose.Schema.Types.ObjectId,
    amount: Number,
    date: Date
});

module.exports = mongoose.model('Payment', paymentSchema);
