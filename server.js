const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const User = require("./models/userTest");
const routes = require("./routes");
// =============== END OF IMPORTS ============ //

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// =========== Define middleware here =========== //
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

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/resumeDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// },
//     () => {
//         console.log("Mongoose Is Connected");
//     }
// );


// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
