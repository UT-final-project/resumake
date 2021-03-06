const db = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("../config/passportConfig");
const auth = require("../config/isAuthenticated");

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
                    // res.status(201).send("User created");
                    res.json(newUser);
                }
            })
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByEmail: function (req, res) {
        db.User
            .findOne({ email: req.params.email })
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    populateUser: function (req, res){
        db.User
            .findById({_id: req.params.id })
            .populate('resumes')
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    loginUser: function (req, res, next) {
        passport.authenticate("local", {
            sucessRedirect: "/",
            falureRedirect: "/login"
        })
        console.log("req.user: " + req.user);
        console.log("Log In Successful!");
        res.json({
            user: req.user,
            loggedIn: true
        })
    },
    getUserHomepage: function (req, res, next) {
        auth.isLoggedIn;
        res.json({
            user: req.user,
            loggedIn: true,
        })
    }
};
