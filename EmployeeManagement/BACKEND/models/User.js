const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Updated User Schema with new fields
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  cname: { type: String, required: true }, // Customer name
  cphone: { type: String, required: true }, // Customer phone
  cheight: { type: Number, required: true }, // Customer height
  cweight: { type: Number, required: true }, // Customer weight
  caddress: { type: String, required: true }, // Customer address
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
