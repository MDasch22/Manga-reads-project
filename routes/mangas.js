const express = require("express");

// userAuth
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
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

router.get("/:mangaId", async(req,res) => {
  const mangaId = req.params.mangaId
  const manga = await db.Manga.findByPk(mangaId);
  //need bookshleves here
  //use the auth to get user id
  //findall bookshleves where userId = user.id
  const { userId } = req.session.auth;
  const bookshelves = await db.Bookshelf.findAll({
    where: {userId}
  })
  res.render("manga", { manga, bookshelves, userId });
})

router.post("/:mangaId/:bookshelfId", async(req,res) => {
  const bookshelfId = req.params.bookshelfId
  const mangaId = req.params.mangaId

  //create new insert in our mangabookshelves table
  const newshelf = await db.MangaBookshelf.build({
    bookshelfId,
    mangaId
  })
  await newshelf.save()
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

const reviewValidators = [
  check('rating')
    .exists({checkFalsy:true})
    .withMessage('Please provide a rating between 1-5')
]

router.post("/:id/reviews/add", requireAuth, csrfProtection, reviewValidators,
asyncHandler (async(req, res, next) => {
  const { rating, comment  } = req.body
  const id = req.params.id
  const newReview = await db.Review.build({
    rating,
    comment
  })
  const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await newReview.save();
      res.redirect(`/:id/reviews`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('add-review', {
        newReview,
        id,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
    // next()
}));


module.exports = router;
