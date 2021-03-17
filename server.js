const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const User = require("./models/userTest");
const routes = require("./routes");
require('dotenv').config();
// Mongoose connection config
require('./initDB')();
// =============== END OF IMPORTS ============ //

const app = express();
const PORT = process.env.PORT || 3001;

// =========== Define middleware here =========== //
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express-session, cors, passport and cookie parser for user authentication
app.use(cors({
    origin: "http://localhost:3000", // <-- location of the react app connecting to
    credentials: true
}))
app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);
// =============== END OF MIDDLEWARE ============== //

// app.use(routes);  <------ This can call all server side routes in the folder when we have any set up

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
