const router = require("express").Router();
const userController = require("../../controller/userController");

// Matches with /api/users
router.route("/")
    .post(userController.createUser);

// Route is api/users/login
router.route("/login")
    .post(userController.loginUser);


module.exports = router;