const db = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");

// Defines querys for DB
module.exports = {
    createUser: function (req, res) {
        db.User
            .findOne({ email: req.body.eamil }, async (err, result) => {
                if (err) throw err;
                if (result) res.send("User already exists");
                if (!result) {
                    // use bcrypt to hash and salt password on signup
                    const hashedPassword = await bcrypt.hash(req.body.password, 10);
                    // Creates new user with the hashed password
                    const newUser = new db.User({
                        email: req.body.email,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        password: hashedPassword,
                    });
                    await newUser.save()
                    res.send("User created");
                }
            })
            .catch(err => res.status(422).json(err));
    },

    loginUser: function (req, res) {
        passport.authenticate("local", (err, user) => {
            if (err) throw err;
            if (!user) res.send("No User Exists");
            else {
                req.login(user, (err) => {
                    if (err) throw err;
                    res.send("Successfully Authenticated");
                    console.log(req.user);
                    res.redirect("/userhome");
                })
            }
        })
    },
};