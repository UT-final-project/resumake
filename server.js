const express = require("express");
const logger = require("morgan");
require('dotenv').config();

// Mongoose connection config
require('./initDB')();

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Requires models listed on index.js file
const db = require("./models");


// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
