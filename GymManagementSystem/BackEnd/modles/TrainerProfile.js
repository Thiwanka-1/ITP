//modle
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    Name:{
        type: String,
    },

    Email:{
        type: String,
        required: true,
        unique: true
    },

    Gender:{
        type: String
    },

    PhoneNumber: {
        type: String
    },
    Address: {
        type: String
    },
    ProfilePhoto: {
        type: String  
    },
    CertificatePhoto: {
        type: String  
    },
    Categories: {
        type: String  
    }

});

const trainerprofile= mongoose.model("trainerpro",ProfileSchema);

module.exports = trainerprofile;