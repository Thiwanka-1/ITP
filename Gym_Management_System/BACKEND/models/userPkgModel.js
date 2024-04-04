const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
    cusName : {
        type: String,
        required: true
    },

    email : {
        type: String,
        required: true
    },

    phone : {
        type: String,
        required : true
    },

    memberid : {
        type : String,
        required: true
    }
})

const Package = mongoose.model("Package Order", packageSchema);

module.exports = Package;

