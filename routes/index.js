let express = require("express");
let router = express.Router();
let models = require("./../models");
let User = models.User;
let sequelize = models.sequelize;

/* GET home page. */
router.get("/", function(req, res, next) {
  User.findAll().then(users => {
    res.render("index", { title: "Calendar", users: users });
  });
});

module.exports = router;
