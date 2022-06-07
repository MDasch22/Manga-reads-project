const express = require("express");

// userAuth
const { csrfProtection, asyncHandler } = require('./users');
// userAuth

// requireAuth
const { requireAuth } = require('../auth');
// requireAuth

const router = express.Router();

const db = require("../db/models");


router.get("/", async(req,res) => {
  const mangas = await db.Manga.findAll();
  res.render('mangas', {mangas});
})

router.get("/:id", async(req,res) => {
  const manga = await db.Manga.findByPk(req.params.id);
  res.render('manga', {manga});

})

router.get("/:id/reviews", async (req, res) => {
  const id = req.params.id
  const reviews = await db.Review.findAll({
    where: { mangaId: id },
    include: [
      { model: db.Manga, as: "Manga" },
      { model: db.User, as: "user" },
    ],
  });
  res.render('reviews', { reviews });
})

router.get("/:id/reviews/add", async(req, res) =>  {
  const id = req.params.id
  const manga = await db.Manga.findByPk(id)
  res.render('add-review', {
    manga,
    id
  })
});


module.exports = router;
