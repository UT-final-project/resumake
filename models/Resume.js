const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    resumeName: {
        type: String,
        trim: true
    },
    abstract: {
        type: String,
        required: false,
        trim: true
    },
    employment: [{
        jobTitle: {
            type: String,
            trim: true
        },
        jobDescription: {
            type: String,
            trim: true
        },
        prevEmployer: {
            type: String,
            trim: true
        },
        startDateMonth: {
            type: String,
        },
        startDateYear: {
            type: String
        },
        endDateMonth: {
            type: String
        },
        endDateYear: {
            type: String
        }
    }],
    education: [{
        degree: {
            type: String
        },
        school: {
            type: String
        },
        startYear: {
            type: String
        },
        endYear: {
            type: String
        }
    }],
    certifications: [{
        certificate: {
            type: String
        },
        awardedBy: {
            type: String
        }
    }],
    skills: {
        type: String,
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
