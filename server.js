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
mongoose.connect('mongodb+srv://ankiit3063:tlOIhP6WJi7CxnEV@cluster-yoga.ulqvp4p.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
const CompletePayment = (details) => {
    return new Promise((resolve) => {
        setTimeout(() => {
          // Simulate a random check that sometimes "fails" for demo purposes
          const isPaymentSuccessful = Math.random() > 0; // 100% chance of success
          if (isPaymentSuccessful) {
            resolve({ success: true, message: 'Payment processed successfully.' });
          } else {
            resolve({ success: false, message: 'Payment failed due to insufficient funds.' });
          }
        }, 2000); // 2 seconds delay to simulate processing time
    });
  };
// Routes
app.post('/register', async (req, res) => {
    try {
        // Basic validation
        const { name, age, contact, batch } = req.body;
        if (age < 18 || age > 65) {
            return res.status(400).json({ message: 'Invalid age. Must be between 18 and 65.' });
        }
        if (!name || !contact || !batch) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

        // Create new participant
        const newParticipant = new Participant({ name, age, contact, batch });
        await newParticipant.save();

        // Create initial payment (assuming 500 Rs INR)
        const newPayment = new Payment({
            participantId: newParticipant._id,
            amount: 500,
            date: new Date() // Current date
        });
        await newPayment.save();

        // Send success response
        const paymentResult = await CompletePayment({
            participantId: newParticipant._id,
            amount: req.body.amount
          });
      
          if (paymentResult.success) {
            // Payment successful
            res.status(201).json({ message: 'Registration and payment successful', paymentDetails: paymentResult });
          } else {
            // Payment failed
            res.status(400).json({ message: 'Registration successful but payment failed', paymentDetails: paymentResult });
          }

    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
