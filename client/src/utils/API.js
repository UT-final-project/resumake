import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // Create user
    createUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    findUserByEmail: function (userEmail) {
        console.log(userEmail);
        return axios.get(`/api/users/email/${userEmail}`);
    },
    // Returns an individual resume from the DB matching the provided user ID
    findResumeByAuthor: function (id) {
        return axios.get(`/api/resume/${id}`);
    },
    // Login user
    loginUser: function (userData) {
        return axios.post("/api/users/login", userData);
    },
    createResume: function (resumeData) {
        return axios.post("/api/resume", resumeData);
    },
    postWorkHistory: function (userData) {
        return axios.post("/api/users/resume/employment", userData);
    },
    postEducation: function (userData) {
        return axios.post("/api/users/resume/education", userData);
    },
    postCertifications: function (userData) {
        return axios.post("api/users/resume/certifications", userData);
    },
    isLoggedIn: function (id) {
        return axios.get("/api/users/" + id);
    }
};
