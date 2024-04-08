//modle
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TwodayworkoutSchema = new Schema({
    

    CustomerID:{
        type: String,
        required: true
    },

    Gender:{
        type: String
    },

    exercises1: [{
        exercise: {
            type: String
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        }
    }],

    exercises2: [{
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

const Workout= mongoose.model("Twodayworkout",TwodayworkoutSchema);

module.exports = Workout;