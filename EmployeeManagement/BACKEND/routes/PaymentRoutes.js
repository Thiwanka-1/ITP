const express = require('express');
const Payment = require('../models/PaymentModels');
const Package = require('../models/PackageModel');
const proPackage = require('../models/proPackageModel');

const router = express.Router();

// Create payment
router.post('/create', async (req, res) => {
  const { packageId, packageType, email, cardNumber, expiryDate, cvv } = req.body;

  try {
    let packageData;

    if (packageType === 'Standard') {
      packageData = await Package.findById(packageId);
    } else if (packageType === 'Promotional') {
      packageData = await proPackage.findById(packageId);
    }

    if (!packageData) {
      return res.status(404).json({ error: 'Package not found' });
    }

    const newPayment = new Payment({
      packageId,
      packageType,
      packageName: packageData.packageName || packageData.proPackageName,
      price: packageData.price || packageData.proPrice,
      email,
      cardNumber,
      expiryDate,
      cvv,
    });

    await newPayment.save();

    res.status(201).json({ message: 'Payment created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating payment', details: error.message });
  }
});

// Get all payments
router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching payments', details: error.message });
  }
});

module.exports = router;
