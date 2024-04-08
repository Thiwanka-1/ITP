//modle
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    

    CustomerID:{
        type: String,
        required: true
    },

    Gender:{
        type: String
    },

    exercises: [{
        exercise: {
            type: String
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        }
    }]

});

const Workout= mongoose.model("workoutplan",workoutSchema);

module.exports = Workout;