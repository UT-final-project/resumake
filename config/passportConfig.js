const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
    // Createt instance using Passport Local Strategy
    new LocalStrategy(
        {
            usernameField: "email"
        },
        function (email, password, done) {
            User.findOne({
                where: { email: email }
            })
                .then((err, user) => {
                    console.log("/// IN PASSPORT ///");
                    console.log(user);
                    if (err) { return done(err); }
                    if (!user) {
                        return done(null, false, {
                            message: "Incorrect Email"
                        });
                    }
                    if (!user.validPassword(password)) {
                        return done(null, false, {
                            message: "Incorrect Password"
                        });
                    }
                    return done(null, user);
                })
            // User.findOne({ email: email }, (err, user) => {
            //     console.log("/// IN LOCAL STRATEGY ///");
            //     if (err) { return done(err); }
            //     // If user doesn't exist return false
            //     if (!user) { return done(null, false); }
            //     // If user found compare hashed password with bcrypt
            //     if (!user.validPassword(password)) { return done(null, false); }
            //     return done(null, user);
            // })
        }
    ));

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

module.exports = passport;