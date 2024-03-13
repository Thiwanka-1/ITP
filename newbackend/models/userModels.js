// userModels.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    
  },
  lastName: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true,
   
  },
  mobile: {
    type: Number, 
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  weight: {
   type: String,
   required: true
},
address: {
  type: String,
  required: true
},

  location: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
