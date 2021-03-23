const router = require("express").Router();
const userController = require("../../controller/userController");
const passport = require("../../config/passportConfig");
const isAuthenticated = require("../../config/isAuthenticated");
const User = require("../../models/User");

// Matches with "/api/users"
router.route("/")
  // Responds with an array of all users
  .get(userController.findAll)
  // Adds a new user
  .post(userController.create)

// Matches with "/api/users/:id"
router.route('/:id')
  // Responds with a single user matching the provided ID
  .get(userController.findById)
  // Updates a user's properties matching the provided ID
  .put(userController.update)
  // Removes the user matching the provided ID
  .delete(userController.remove)

// Matches with "/api/users/email/:email"
router.route('/email/:email')
  // Responds with a single user matching the provided email
  .get(userController.findByEmail)

let userObj = {};

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log("/// Passport Authenticating ///");
    if (err) throw err;
    if (!user) res.send("User Doesn't Exist");
    else {
      req.login(user, err => {
        if (err) throw err;
        userObj = user;
        res.json({ userObj, loggedIn: true });
        console.log("/// Logged In ///");
        console.log({ userObj });
      });
    }
  })(req, res, next);
});

// Matches with "api/users/userhome"
router.get("/" + userObj._id, isAuthenticated, (req, res) => {
  User.findById({ _id: userObj._id }, (err, user) => {
    if (err) throw err;
    else {
      res.json(user);
    }
  });
});

module.exports = router;
