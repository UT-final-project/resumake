const router = require("express").Router();
const userRoutes = require("./apiUsers");
const resumeRoutes = require("./apiResume");

// User Routes
router.use("/users", userRoutes);

// Resume Routes
router.use("/resume", resumeRoutes);

module.exports = router;