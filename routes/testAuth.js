// ========================================================================================= //
// This Is A Test File But Could Be Used As A Template For How To Use Authentication On Routes
// ========================================================================================== //

// These are the required dependencies
const router = require("express").Router();
const User = require("../models/userTest");
const bcrypt = require("bcryptjs");
const passport = require("passport");

// Routes for testing
router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No user exists");
        else {
            req.login(user, (err) => {
                if (err) throw err;
                res.send("Successfully authenticated");
                console.log(req.user);
            })
        }
    })(req, res, next);
});

router.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User already exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save()
            res.send("User created");
        }
    })
})

router.get("/user", (req, res) => {
    res.send(req.user);
})

module.exports = router;