//modle
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schedulechange = new Schema({
    

    Email:{
        type: String,
        required: true,
        unique: true
    },

    Request:{
        type: String,
        required: true
    }

});

const SCchange= mongoose.model("shedulech",schedulechange);

module.exports = SCchange;