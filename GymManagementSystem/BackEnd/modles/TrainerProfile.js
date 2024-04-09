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
        data: Buffer, // Binary data for profile photo
        contentType: String // Mime type of the image
      },
      CertificatePhoto: {
        data: Buffer, // Binary data for certificate photo
        contentType: String // Mime type of the image
      },
    Categories: {
        type: String  
    }

});

const trainerprofile= mongoose.model("trainerpro",ProfileSchema);

module.exports = trainerprofile;