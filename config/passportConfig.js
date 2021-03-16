const User = require("../models/userTest");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
    passport.use(
        // Createt instance using Passport Local Strategy
        new localStrategy((username, password, done) => {
            User.findOne({ username: username }, (err, user) => {
                if (err) throw err;
                // If user doesn't exist return false
                if (!user) return done(null, false);
                // If user found compare hashed password with bcrypt
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        //If user and password match return user
                        return done(null, user);
                    } else {
                        //Else return false
                        return done(null, false);
                    }
                })
            })
        })
    );

    //Passport requires serialize and deserialize user
    //Serialize user stores a cookie in the browser of the user id
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });

    //Deserializes user id from cookie and matches with DB
    passport.deserializeUser((id, cb) => {
        User.findOne({ _id: id }, (err, user) => {
            cb(err, user);
        })
    })
}