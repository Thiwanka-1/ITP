//modle
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    

    Email:{
        type: String,
        required: true,
    },

    CustomerId:{
        type: String,
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

export default Workout;