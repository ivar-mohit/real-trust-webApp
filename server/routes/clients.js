const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Add a new client
router.post('/', async (req, res) => {
  try {
    const { name, description, designation, image } = req.body;
    const newClient = new Client({ name, description, designation, image });
    await newClient.save();
    res.status(201).json(newClient);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create client' });
  }
});

// Get all clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
});

module.exports = router;
