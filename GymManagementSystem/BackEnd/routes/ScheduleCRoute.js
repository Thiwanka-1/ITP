const router = require("express").Router();
let Schedule = require("../modles/ScheduleChange.js") ;

router.route("/add").post((req, res) => {

    
    const TrainerID= req.body.TrainerID;
    const Request = req.body.Request;
    

    if (!TrainerID || !Request) {
        return res.status(400).json({ error: "TrainerID and Request are required fields." });
    }

    const newSchedule = new Schedule({
        
        TrainerID,
        Request
            
    });

    
    newSchedule.save().then(() => {
        res.json("Request Send");
    }).catch(err => {
        console.log(err);
    });


});

module.exports = router;

