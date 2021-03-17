const router = require("express").Router();
const userRoutes = require("./apiUsers");

// User Routes
router.use("/users", userRoutes);

module.exports = router;