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
                    const hashedPassword = await bcrypt.hash(req.body.password, 10);

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
    }
};