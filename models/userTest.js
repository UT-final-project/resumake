const mongoose = require("mongoose");
const User = new mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model("User", User);