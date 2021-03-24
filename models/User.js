const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

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
      ({ length }) => length >= 6,
      "Password should be longer than 6 characters."
    ],
    trim: true
  },
  created: {
    type: Date,
    default: Date.now,
    required: true
  },
  resumes: [{
    type: Schema.Types.ObjectId,
    ref: "Resume"
  }]
});

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

UserSchema.methods.validPassword = function (password, encrypted) {
  return bcrypt.compareSync(password, encrypted);
}

function populateUsers(){
  return User.findOne({_id: user._id})
      .populate('resumes')
      .exec(function(err, resumes){
          if (err) throw err;
          console.log("Populated user with resumes!" + resumes)
      });
}



const User = mongoose.model('User', UserSchema);

module.exports = User;