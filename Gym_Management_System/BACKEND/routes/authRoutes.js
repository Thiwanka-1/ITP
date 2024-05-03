const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Middleware to find user by ID
async function findUserById(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    req.user = user; // Store the user in the request object for subsequent use
    next(); // Proceed to the next middleware
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving user', error });
  }
}

// Sign up
router.post('/signup', async (req, res) => {
  const { username, email, password, cname, cphone, height, weight, isAdmin } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12); // Hash the password before saving
    const user = new User({
      username,
      email,
      password: hashedPassword,
      cname,
      cphone,
      height,
      weight,
      isAdmin,
    });
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error creating user', error });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    res.send({
      message: 'Logged in successfully',
      user: { username: user.username, isAdmin: user.isAdmin, id: user._id },
    });
  } catch (error) {
    res.status(500).send({ message: 'Error logging in', error });
  }
});

// Get user by ID
router.get('/user/:id', findUserById, (req, res) => {
  res.send({
    user: {
      username: req.user.username,
      email: req.user.email,
      cname: req.user.cname,
      cphone: req.user.cphone,
      height: req.user.height,
      weight: req.user.weight,
      isAdmin: req.user.isAdmin,
    },
  });
});

// Update user by ID
router.put('/user/:id', findUserById, async (req, res) => {
  const { username, cname, cphone, height, weight, isAdmin } = req.body;
  try {
    if (username) req.user.username = username;
    if (cname) req.user.cname = cname;
    if (cphone) req.user.cphone = cphone;
    if (height) req.user.height = height;
    if (weight) req.user.weight = weight;
    if (isAdmin !== undefined) req.user.isAdmin = isAdmin;

    await req.user.save(); // Save the updated user information

    res.send({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error updating user', error });
  }
});

// Delete user by ID
router.delete('/user/:id', findUserById, async (req, res) => {
  try {
    await req.user.remove(); // Remove the user from the database
    res.send({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting user', error });
  }
});

module.exports = router;
