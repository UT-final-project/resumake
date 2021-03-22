const router = require("express").Router();
const userController = require("../../controller/userController");
const passport = require("../../config/passportConfig");
const auth = require("../../config/isAuthenticated");

// Matches with "/api/users"
router.route("/")
  // Responds with an array of all users
  // .get(userController.findAll)
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

// Matches with "api/users/login"
// router.post("/login", passport.authenticate("local"), (req, res) => {
//   console.log("/// API LOGIN ///");
//   console.log(req.user);
//   res.json({
//     user: req.user,
//     loggedIn: true
//   })
// })

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log("/// Passport Authenticating ///");
    if (err) throw err;
    if (!user) res.send("User Doesn't Exist");
    else {
      req.login(user, err => {
        if (err) throw err;
        res.json(user)
        console.log("/// Logged In ///");
        console.log({ user });
      })
    }
  })(req, res, next);
})


// Matches with "api/users/userhome"
router.get("/userhome", (req, res) => {
  console.log(req.user);
  console.log(req.user.firstname);
  res.json(req.user);
})


module.exports = router;
