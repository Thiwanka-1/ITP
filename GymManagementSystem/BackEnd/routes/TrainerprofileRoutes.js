// routes/trainerProfileRoutes.js

const router = require("express").Router();
const multer = require('multer');
const TrainerProfile = require("../models/TrainerProfile.js");
const fs = require('fs');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  }
});

const upload = multer({ storage: storage });

// Route to handle adding a new trainer profile
router.post("/add", upload.fields([{ name: 'ProfilePhoto', maxCount: 1 }, { name: 'CertificatePhoto', maxCount: 1 }]), (req, res) => {
    const { Name, Email, Gender, PhoneNumber, Address, Categories } = req.body;

    if (!Email || !Gender) {
        return res.status(400).json({ error: "Missing required fields." });
    }

    // Construct the new TrainerProfile object
    const newProfile = new TrainerProfile({
        Name,
        Email,
        Gender,
        PhoneNumber,
        Address,
        ProfilePhoto: req.files['ProfilePhoto'] ? req.files['ProfilePhoto'][0].path : null,
        CertificatePhoto: req.files['CertificatePhoto'] ? req.files['CertificatePhoto'][0].path : null,
        Categories
    });

    // Save the new profile to the database
    newProfile.save()
        .then(() => res.json("Trainer profile added successfully"))
        .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
