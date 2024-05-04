const express = require('express');
const router = express.Router();
const { Package, Payment } = require('./models'); // Importing the models
const nodemailer = require('nodemailer'); // For sending emails

// Route to fetch package by ID
router.get('/package/:id', async (req, res) => {
  try {
    const packageData = await Package.findById(req.params.id);
    if (!packageData) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.json(packageData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching package', error });
  }
});

// Payment processing route
router.post('/payment', async (req, res) => {
  const { customerName, email, cardNumber, cvv, expirationDate, packageId } = req.body;

  // Fetch the package details
  const packageData = await Package.findById(packageId);
  if (!packageData) {
    return res.status(404).json({ message: 'Package not found' });
  }

  // Create the payment record
  const newPayment = new Payment({
    customerName,
    email,
    cardNumber,
    cvv,
    expirationDate,
    package: packageId,
  });

  try {
    await newPayment.save();

    // Send a confirmation email to the customer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com', // Your email
        pass: 'your-email-password', // Your email password
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Payment Confirmation',
      text: `Thank you, ${customerName}, for purchasing the ${packageData.name}. Your payment of $${packageData.price} was successful.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });

    res.json({ message: 'Payment successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment', error });
  }
});

// Route to view all payments
router.get('/payments', async (req, res) => {
  try {
    const payments = await Payment.find().populate('package');
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payments', error });
  }
});

module.exports = router;
