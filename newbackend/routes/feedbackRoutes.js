const router = require("express").Router();
let Feedback = require("../models/feedbackModels");

router.route('/adds').post((req, res) => {

    const {
        Name,
        feedback,
        email,
    } = req.body || {};

    const newFeedback = new Feedback({
        Name,
        feedback,
        email,
    });

    newFeedback
        .save()
        .then(() => {
            res.json('feedback sent');
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: err.message });
        });
});

router.route("/").get((req,res)=>{
    Feedback.find().then((feedbacks)=>{
        res.json(feedbacks)
    }).catch((err)=>{
       console.log(err)
    })
  })

  router.route("/update/:id").put(async(req, res)=>{
    let feedbackId = req.params.id;
    const {Name, feedback, email} = req.body;

    const updateFeedback = {
       
        Name,
        feedback,
        email,
    }

    const update = await Feedback.findByIdAndUpdate(feedbackId,updateFeedback)
    .then(()=>{
        res.status(200).send({status:"User updated"})

    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

router.route("/delete/:id").delete(async(req, res)=>{
    let feedbackId = req.params.id;

    await Feedback.findByIdAndDelete(feedbackId)
    .then(() => {
        res.status(200).send({status:"feedback deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let feedbackId = req.params.id;
    await Feedback.findById(feedbackId)
.then((feedback) => {
    res.status(200).send({status:"User fetched",feedback});
}).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with get user", error:err.message});
    })
})


module.exports = router;