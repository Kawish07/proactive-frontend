const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  postcode: String,
  service: String,
  message: String,
  agreeToPrivacy: Boolean,
  captchaVerified: Boolean,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).json({ success: true, message: 'Contact submitted and saved.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;