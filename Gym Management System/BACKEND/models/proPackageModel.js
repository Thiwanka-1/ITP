const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
    proPackageID : {
        type: Number,
        required: true
    },

    proPackageName : {
        type: String,
        required: true
    },

    proPrice : {
        type: Number,
        required : true
    },

    proDuration : {
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

const Package = mongoose.model("Promotional Package", packageSchema);

module.exports = Package;

