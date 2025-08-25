const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  postcode: String,
  service: String,
  message: String,
  agreedToPolicy: Boolean,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quote', quoteSchema);