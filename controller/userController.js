const db = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");

// Defines querys for DB
module.exports = {
    create: function (req, res) {
        db.User
            .findOne({ email: req.body.eamil }, async (err, result) => {
                if (err) throw err;
                if (result) res.status(403).send("User already exists");
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
                    res.status(201).send("User created");
                }
            })
              .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
        db.User
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.status(200).json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.User
          .findById(req.params.id)
          .then(dbModel => res.status(200).json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.User
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.status(200).json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.User
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.status(200).json(dbModel))
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