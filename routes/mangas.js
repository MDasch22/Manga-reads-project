const express = require("express");

// userAuth
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');

//WILL ALLOW GUEST USER TO ADD PICTURE OF NEW BOOK CREATED
const multer = require('multer')
const path = require("path")

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
