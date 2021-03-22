import axios from "axios";

export default {
    // Create user
    createUser: function (userData) {
        return axios.post("/api/users", userData)
    },

    // Login user
    loginUser: function (userData) {
        return axios.post("/api/users/login", userData)
    },

    createResume: function (resumeData) {
        return axios.post("/api/resume", resumeData)
    },

    postWorkHistory: function (userData) {
        return axios.post("/api/users/resume/employment", userData)
    },

    postEducation: function (userData) {
        return axios.post("/api/users/resume/education", userData)
    },

    postCertifications: function (userData) {
        return axios.post("api/users/resume/certifications", userData)
    },

    isLoggedIn: function () {
        return axios.get("/api/users/userhome")
    }
};