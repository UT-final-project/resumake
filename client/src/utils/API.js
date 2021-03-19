import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // User Operations
    // Create user
    createUser: function (userData) {
        return axios.post("/api/users", userData)
    },
    // Login user
    loginUser: function (userData) {
        return axios.post("/api/users/login", userData)
    },
    isLoggedIn: function () {
        return axios.get("/api/users/userhome")
    },

    // Resume operations
    createResume: (resume) => {
        axios.post("/api/users/resume/", resume)
    }    
};
