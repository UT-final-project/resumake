const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
    resumeName: {
        type: String,
        required: [true, 'Provide a name to identify this resume'],
        trim: true
    },
    abstract: {
        type: String,
        required: false,
        trim: true
    },
    employment: {
        type: String,
        required: false,
        trim: true
    },
    education: {
        type: String,
        required: false,
        trim: true
    },
    projects: {
        type: String,
        required: false,
        trim: true
    },
    skills: {
        type: String,
        required: false,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now,
        required: false
    }
});


module.exports = mongoose.model('Resume', ResumeSchema);
