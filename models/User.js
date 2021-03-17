const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'You must provide an email'],
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    trim: true
  },
  firstname: {
    type: String,
    lowercase: true,
    required: [true, 'You must provide a first name'],
    min: 1,
    max: 15,
    trim: true
  },
  lastname: {
    type: String,
    lowercase: true,
    required: [true, 'You must provide a last name'],
    min: 1,
    max: 15,
    trim: true
  },  
  password: {
    type: String,
    required: [true, 'You must provide a password'],
    min: 6,
    max: 25,
    validate: [
      ({length}) => length >= 6,
      "Password should be longer than 6 characters."
    ],
    trim: true
  },
  created: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);