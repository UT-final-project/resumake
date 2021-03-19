const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
require('dotenv').config();
require('../client/build')

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    if (process.env.NODE_ENV === "production") {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    }
    // else if (process.env.NODE_ENV === "development") {
    //     res.sendFile(path.join(__dirname, "../client/index.html"));
    // }
    // else {
    //     res.sendFile(path.join(__dirname, "../client/index.html"));
    // }
});

module.exports = router;