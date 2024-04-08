const router = require("express").Router();
let TrainerProfile = require("../models/TrainerProfile.js");

router.route("/add").post((req, res) => {
    const { Name, Email, Gender, PhoneNumber, Address, ProfilePhoto, CertificatePhoto, Categories } = req.body;

    if (!Email || !Gender) {
        return res.status(400).json({ error: "Missing required fields." });
    }

    const newProfile = new TrainerProfile({
        Name,
        Email,
        Gender,
        PhoneNumber,
        Address,
        ProfilePhoto,
        CertificatePhoto,
        Categories
    });

    newProfile.save()
        .then(() => res.json("Trainer profile added successfully"))
        .catch(err => res.status(500).json({ error: err.message }));
});

 

module.exports = router;
