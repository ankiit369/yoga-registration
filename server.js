// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Participant = require('./models/Participant');
const Payment = require('./models/Payment');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.post('/register', async (req, res) => {
    
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
