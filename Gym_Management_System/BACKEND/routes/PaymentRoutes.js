const router = require("express").Router();
let Payment = require("../models/PaymentModels.js");

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const cardNumber = req.body.cardNumber;
  const cvv = req.body.cvv;
  const expirationDate = req.body.expirationDate;

  const newPackage = new Payment({
      email,
      cardNumber,
      cvv,
      expirationDate
  })

  newPackage.save().then(() => {
      res.json("Package Added")
  }).catch((err) => {
      console.log(err);
  })
})

//read part

router.route("/").get((req,res) => {
  Payment.find().then((packages) => {
      res.json(packages)
  }).catch((err) => {
      console.log(err)
  })
})


module.exports = router;
