const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empSchema = new Schema({
    empid : {
        type: String,
        required: true
    },

    empname : {
        type: String,
        required: true
    },

    job : {
        type : String,
        required: true
    },
})

const Package = mongoose.model("Employee", empSchema);

module.exports = Package;

