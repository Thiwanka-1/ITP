const mongoose = require('mongoose');

// Payment Schema
const paymentSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
  },
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
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
  
});

const Payment = mongoose.model('Payment', paymentSchema);