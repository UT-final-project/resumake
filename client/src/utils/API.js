import axios from "axios";

export default {
    // Create user
    createUser: function (userData) {
        return axios.post("/api/users", userData)
    }
};