const router = require("express").Router();
let User = require("../models/userModels");

// userRoutes.js
router.route('/add').post((req, res) => {
  
    const {
      firstName,
      lastName,
      email,
      mobile,
      gender,
      weight,
      address,
      location,
      photo,
    } = req.body || {};
  
    const newUser = new User({
      firstName,
      lastName,
      email,
      mobile,
      gender,
      weight,
      address,
      location,
      photo
    });
  
    newUser
      .save()
      .then(() => {
        res.json('User Added');
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ error: err.message });
      });
  });
  
  router.route("/").get((req,res)=>{
    User.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
       console.log(err)
    })
  })

router.route("/update/:id").put(async(req, res)=>{
    let userId = req.params.id;
    const {firstName, lastName, email, mobile, gender, weight,location,photo } = req.body;

    const updateUser = {
       
        firstName,
        lastName,
        email,
        mobile,
        gender,
        weight,
      address,
        location,
        photo,
    }

    const update = await User.findByIdAndUpdate(userId,updateUser)
    .then(()=>{
        res.status(200).send({status:"User updated"})

    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;

    await User.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status:"User deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userId = req.params.id;
    await User.findById(userId)
.then((user) => {
    res.status(200).send({status:"User fetched"});
}).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with get user", error:err.message});
    })
})

module.exports = router;