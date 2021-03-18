import axios from "axios";

export default {
    // Create user
    createUser: function (userData) {
        return axios.post("/api/users", userData)
    },

    // Login user
    loginUser: function (userData) {
        return axios.post("/api/users/login", userData)
    }

    

};