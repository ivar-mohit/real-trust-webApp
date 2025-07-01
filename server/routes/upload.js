const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Multer config
const storage = multer.memoryStorage(); // Use memory for processing in sharp
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { originalname, buffer } = req.file;

    const filename = `${Date.now()}-${originalname}`;
    const outputPath = path.join(__dirname, '../uploads', filename);

    await sharp(buffer)
      .resize(450, 350)
      .toFile(outputPath);

    // You can also store `filename` in your DB here (optional)

    res.json({ filename });
  } catch (err) {
    console.error('Image upload failed:', err);
    res.status(500).json({ error: 'Image upload failed' });
  }
});

module.exports = router;
