const mongoose = require('mongoose');

// Package Schema
const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Package = mongoose.model('Package', packageSchema);

// Payment Schema
const paymentSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: String,
    required: true,
  },
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
    required: true,
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Package, Payment };
