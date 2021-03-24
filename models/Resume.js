const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    abstract: {
        type: String,
        required: false,
        trim: true
    },
    employment: {
        type: Array,
        required: false
    },
    education: {
        type: Array,
        required: false
    },
    certifications: {
        type: Array,
        required: false
    },
    skills: {
        type: Array,
        required: false  
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    updated: {
        type: Date,
        required: false
    }
});

const Resume = mongoose.model('Resume', ResumeSchema);

module.exports = Resume;