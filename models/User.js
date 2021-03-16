const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  firstname: {
      type: String,
      unique: true,
      min: 6,
      max: 15
  },
  lastname: {
    type: String,
    unique: true,
    min: 6,
    max: 15
  },  
  password: {
      type: String,
      required: true,
      min: 6,
      max: 1024
  },
});

module.exports = mongoose.model('User', UserSchema);