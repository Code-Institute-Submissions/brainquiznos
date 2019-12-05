var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
/* GET home page. */
router.get("/", async (req, res, next) => {
  const USERS = mongoose.model("users");

  const user = req.session.user || false;
  const userFind = user ? await USERS.findById(user) : null;

  if (!user) {
    res.render("index", { user });
  } else {
    console.log(userFind.gender);
    res.render("interface", { user, gender: userFind.gender });
  }
});
router.get("/signup", function(req, res, next) {
  res.render("signup", {
    user: false,
    err: false,
    errMessage: {
      username: false,
      email: false,
      password: false
    }
  });
});
router.get("/login", function(req, res, next) {
  res.render("login", {
    user: false,
    err: false,
    errMessage: {
      username: false,
      email: false,
      password: false
    }
  });
});
module.exports = router;