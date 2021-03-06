const passport = require("../middleware/passport");
let database = require("../database");

let authController = {
    login: (req, res) => {
        res.status(200);
        res.render("/", { loggedIn: false });
    },

    register: (req, res) => {
        res.status(200);
        res.render("auth/register", { loggedIn: false });
    },

    loginSubmit: (req, res, next) => {
        passport.authenticate("local", {
            successRedirect: "/expenses",
            failureRedirect: "/index.html",
        })(req, res, next);
    },
    registerSubmit: async(req, res) => {
        let idNum = database.database.length + 1
        let user = {
            expenses: [],
            id: idNum,
            email: req.body.email,
            password: req.body.password
        }
        database.database.push(user)
        res.render("auth/login")
    },
    logout: (req, res) => {
        req.logout();
        res.status(200);
        res.redirect("/index.html")
    }
};

module.exports = authController;