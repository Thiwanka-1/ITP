const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ThreedayworkoutSchema = new Schema({
    

    Email:{
        type: String,
        required: true,
        unique: true
    },

    CustomerId:{
        type: String,
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
    }],

    exercises3: [{
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

const Workout= mongoose.model("Threedayworkout",ThreedayworkoutSchema);

module.exports = Workout;