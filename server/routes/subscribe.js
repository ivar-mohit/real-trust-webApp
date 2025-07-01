const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// Subscribe to newsletter
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;

    // Optional: check if email already exists
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Email already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

// Get all subscribers (for admin)
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
});

module.exports = router;
