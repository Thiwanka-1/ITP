const router = require("express").Router();
let Schedule = require("../models/ScheduleChange.js") ;

router.route("/add").post((req, res) => {

    
    const Email= req.body.Email;
    const Request = req.body.Request;
    

    if (!Email || !Request) {
        return res.status(400).json({ error: "Email and Request are required fields." });
    }

    const newSchedule = new Schedule({
        
        Email,
        Request
            
    });

    
    newSchedule.save().then(() => {
        res.json("Request Send");
    }).catch(err => {
        console.log(err);
    });


});

module.exports = router;

