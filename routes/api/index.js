const router = require("express").Router();
const userRoutes = require("./apiUsers");

// User Routes
router.use("/", userRoutes);

module.exports = router;