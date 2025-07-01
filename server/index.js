const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);

const clientRoutes = require('./routes/clients');
app.use('/api/clients', clientRoutes);

const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

const subscribeRoutes = require('./routes/subscribe');
app.use('/api/subscribe', subscribeRoutes);


const uploadRoutes = require('./routes/upload');
app.use('/api/upload', uploadRoutes);
app.use('/uploads', express.static('uploads')); // serve images



// Sample route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
