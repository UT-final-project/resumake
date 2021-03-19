const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
require('dotenv').config();

// Mongoose connection config
require('./initDB')();
// =============== END OF IMPORTS ============ //

const routes = require("./routes");
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

// API and view routes
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
else if (process.env.NODE_ENV === "development") {
    app.use(express.static("./client/index.html"));
}

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
