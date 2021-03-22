const auth = {
    // isLoggedIn: (req, res, next) => {
    //     console.log("/// isLoggedIn Auth");
    //     console.log(req.user);
    //     if (req.user) {
    //         console.log("User authenticated");
    //         next();
    //     } else {
    //         console.log("User not authenticated")
    //         res.redirect("api/users/login");
    //     }
    // },

    isLoggedIn: function (req, res, next) {
        console.log("// isLoggedIn Function //");
        if (req.isAuthenticated()) {
            console.log("User Authenticated");
            next();
        } else {
            console.log("User Not Authenticated");
            res.redirect("/api/users/login");
        }
    },

    logoutUser: (req, res, next) => {
        if (req.user) {
            console.log("logged out successfully")
            req.logout();
            next();
        } else {
            next();
        }
    }
}

module.exports = auth;