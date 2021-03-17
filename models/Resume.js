const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
abstract: {
    type: String,
    unique: true,
    required: [true, 'Field must be completed'],
    trim: true
  },
employment: {
    unique: true,
    required: [false],
    trim: true
},
education: {
    unique: true,
    required: [false],
    trim: true
},
projects: {
    unique: true,
    required: [false],
    trim: true
},
skills: {
    unique: true,
    required: [false],
    trim: true
},
});


module.exports = mongoose.model('Resume', ResumeSchema);