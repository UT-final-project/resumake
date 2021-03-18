const router = require("express").Router();
const userController = require("../../controller/userController");

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

// Matches with "api/users/login"
router.route("/login")
    .post(userController.loginUser);


module.exports = router;
