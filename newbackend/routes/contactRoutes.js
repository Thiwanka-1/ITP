const router = require("express").Router();
let  Contact= require("../models/contactModels");

router.route("/ad").post((req, res) => {

    const {
        name,
        userId,
        email,
        message,

    } = req.body || {};
    const newContact = new Contact({

        name,
        userId,
        email,
        message,

    })

    newContact
      .save()
      .then(() => {
        res.json(' message send');
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ error: err.message });
      });
});

module.exports = router;