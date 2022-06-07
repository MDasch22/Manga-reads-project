const express = require("express");

// userAuth
const { csrfProtection, asyncHandler } = require('./users');
// userAuth

// requireAuth
const { requireAuth } = require('../auth');
// requireAuth

const router = express.Router();
const { User, Bookshelf, Manga, Review } = require("../models");

router.get("/", async (req, res) => {
  const mangas = await Manga.findAll();
  res.render('mangas', { mangas });
})

router.get("/:id", async (req, res) => {
  const manga = await Manga.findByPk(req.params.id);
  res.render('manga', { manga });
})

router.get("/:id/reviews", async (req, res) => {
  const id = req.params.id
  const reviews = await Review.findAll({
    where: { mangaId: id },
    include: [
      { model: Manga, as: "manga" },
      { model: User, as: "user" },
    ],
  });
  res.render('reviews', { reviews });
})




module.exports = router;
