const express = require('express');
const { check, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

const { User, Bookshelf, Manga, MangaBookshelf} = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser } = require('../auth');

const router = express.Router();

router.get("/", csrfProtection, async(req, res) => {

  res.render("guest-form", {
    Title: "Let us know what you think :)"
  })

});

router.post("/", async(req, res) => {
  const user = await User.findOne({
    where: {
      firstName: "Guest"
    }
  })
  console.log(user)
  loginUser(req, res, user);
  return res.redirect('/')
})


module.exports = router;
