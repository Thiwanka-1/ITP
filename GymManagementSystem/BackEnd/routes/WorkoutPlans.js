const router = require("express").Router();
let workoutplan = require("../modles/Workoutplan.js") ;

router.route("/add").post((req, res) => {

    
    const Email= req.body.Email;
    const Gender = req.body.Gender;
    const exercises  = req.body.exercises;

    if (!Email || !Gender || !exercises || !Array.isArray(exercises)) {
        return res.status(400).json({ error: "Missing or invalid fields in the request." });
    }

    const invalidExercise = exercises.find(({ exercise, reps }) => !exercise || isNaN(reps));
    if (invalidExercise) {
        return res.status(400).json({ error: "Invalid exercise data." });
    }

    const newWorkout = new workoutplan({
        
        Email,
        Gender,
        exercises
            
        

    });

    
    newWorkout.save().then(() => {
        res.json("workout plan added");
    }).catch(err => {
        console.log(err);
    });


});


router.route("/").get((req, res) => {

    workoutplan.find().then((workouts) => {
        res.json(workouts)

    }).catch((err) => {
        console.log(err);
    })
})

router.route("/trainer/:email").get((req, res) => {
    const trainerEmail = req.params.email;
    workoutplan.find({ Email: trainerEmail }).then((workouts) => {
        res.json(workouts)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").put(async (req, res) => {
    try {
        const workoutId = req.params.id;
        const { exercises } = req.body;

        // Ensure the request body contains the necessary fields
        if (!exercises || !Array.isArray(exercises)) {
            return res.status(400).json({ error: "Invalid request. Missing or invalid 'exercises' data." });
        }

        // Validate the exercises data
        const invalidExercise = exercises.find(({ exercise, sets, reps }) => !exercise || isNaN(sets) || isNaN(reps));
        if (invalidExercise) {
            return res.status(400).json({ error: "Invalid exercise data." });
        }

        // Update the workout plan
        await workoutplan.findByIdAndUpdate(workoutId, { exercises });
        res.status(200).json({ status: "Workout plan updated successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error updating workout plan." });
    }
});


router.route("/delete/:id").delete(async(req, res) => {
    let userid = req.params.id;

    await workoutplan.findByIdAndDelete(userid).then(() => {
        res.status(200).send({status:"workout plan deleted"});
    }).catch(err => {
        console.log(err.message);
        res.status(500).send({status:"Error with deleting",error:err.message});
    });
})

router.route("/get/:id").get(async (req, res) => {
    let uid = req.params.id;
    const work=await workoutplan.findById(uid).then((user) => {
        res.status(200).send({status:"workout plan fetched",user})
    }).catch(err => {
        console.log(err.message);
        res.status(err.status).send({status:"Error with get workoutplan",error:err.message});
    })
})

module.exports = router;

