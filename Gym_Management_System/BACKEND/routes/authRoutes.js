const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Middleware to find a user by ID
const findUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    req.user = user; // Store user in request object for subsequent use
    next(); // Proceed to the next middleware
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving user', error });
  }
};

// Sign up
router.post('/signup', async (req, res) => {
  const { username, email, password, isAdmin, cname, cphone, cheight, cweight, caddress } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const user = new User({
      username,
      email,
      password: hashedPassword,
      isAdmin,
      cname,
      cphone,
      cheight,
      cweight,
      caddress, 
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
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    const userRole = user.isAdmin ? 'admin' : 'user'; 

    res.send({
      message: 'Logged in successfully',
      user: {
        id: user._id,
        username: user.username,
        role: userRole,
      },
    });

  } catch (error) {
    res.status(500).send({ message: 'An error occurred during login', error });
  }
});

// Get user by ID
router.get('/user/:id', findUserById, (req, res) => {
  res.status(200).send({
    message: 'User found',
    user: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      isAdmin: req.user.isAdmin,
      cname: req.user.cname,
      cphone: req.user.cphone,
      cheight: req.user.cheight,
      cweight: req.user.cweight,
      caddress: req.user.caddress,
    },
  });
});

// Update user by ID
router.put('/user/:id', findUserById, async (req, res) => {
  const { username, email, isAdmin, cname, cphone, cheight, cweight, caddress } = req.body;

  try {
    // Update the fields based on input
    if (username) req.user.username = username;
    if (email) req.user.email = email;
    req.user.isAdmin = isAdmin ?? req.user.isAdmin;
    if (cname) req.user.cname = cname;
    if (cphone) req.user.cphone = cphone;
    if (cheight) req.user.cheight = cheight;
    if (cweight) req.user.cweight = cweight;
    if (caddress) req.user.caddress = caddress;

    await req.user.save(); // Save the updated user information

    res.status(200).send({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error updating user', error });
  }
});

// Delete user by ID
router.delete('/user/:id', findUserById, async (req, res) => {
  try {
    await req.user.remove(); // Remove the user from the database
    res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting user', error });
  }
});

module.exports = router;
