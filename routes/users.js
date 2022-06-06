const express = require('express');

const router = express.Router();
const {User, Bookshelf, Manga} = require('../models');

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.render("users", { users });
});

router.get("/:id(\\d+)", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.render("profile", { user });
});

router.get("/:id/bookshelves", async(req, res) => {
  const user = await User.findByPk(req.params.id);
  res.render("bookshelves", { user });
})

router.get("/:id/bookshelves/1", async(req, res) => {
  // const user = await User.findByPk(req.params.id, {
  //   include: [
  //     {model: Bookshelf, as: 'bookshelf'},
  //     {model: Manga, as: 'manga'}
  //   ]
  // });
  const id = req.params.id
  const bookshelf = await Bookshelf.findAll({
    where: { userId: id, name: "Want To Read" },
    include: [
      { model: User, as: "user" },
      { model: Manga, as: 'manga' }
    ],
  });
  res.render("WantToRead", { bookshelf });
})
module.exports = router;
