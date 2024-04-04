const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
    packageNumber : {
        type: Number,
        required: true
    },

    packageName : {
        type: String,
        required: true
    },

    price : {
        type: Number,
        required : true
    },

    duration : {
        type : String,
        required: true
    },

    packageType:{
        type : String,
        required: true
    },

    description : {
        type: String,
        required: true
    }
})

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;

