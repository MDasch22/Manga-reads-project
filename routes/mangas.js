const express = require("express");
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')

// userAuth
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require("../auth");

//WILL ALLOW GUEST USER TO ADD PICTURE OF NEW BOOK CREATED

const router = express.Router();
// const multer = require('multer')


const path = require("path")
const cookieParser = require("cookie-parser")

// userAuth

// requireAuth
const { requireAuth } = require('../auth');
const { parse } = require("path");
// requireAuth

// router.use(cookieParser);

router.get("/", async (req, res) => {
  const mangas = await db.Manga.findAll();
  res.render('mangas', { mangas });
})

router.get("/:mangaId", async (req, res) => {
  const mangaId = req.params.mangaId
  const manga = await db.Manga.findByPk(mangaId);
  const reviews = await db.Review.findAll({
    where: {mangaId},
    include: [
      { model: db.Manga, as: "Manga" },
      { model: db.User, as: "user" },
  ]})
  let sum = 0;
  let counter = 0;
  await reviews.forEach(review => {
    sum += review.rating;
    counter += 1;
  });
  const avg = sum / counter
  const reviewAvg =avg.toFixed(1)
  // const avg = sum / counter;
  //need bookshleves here
  //use the auth to get user id
  //findall bookshleves where userId = user.id
  //START


  // if(reviews) {
  //   res.render('reviews', { reviews, manga, id})
  // } else {
  //   reviews = null
  //   res.render('reviews', {reviews, manga, id})
  // }
  //END
  if (req.session.auth) {
    const { userId } = req.session.auth;
    const bookshelves = await db.Bookshelf.findAll({
      where: { userId }
    })
    res.render("manga", { manga, bookshelves, userId, reviewAvg, counter, reviews, mangaId});
  } else {
    const userId = null
    res.render("manga", { manga, userId, reviewAvg, counter, reviews, mangaId});
  }
})



router.post("/:mangaId/:bookshelfId", async (req, res) => {
  const bookshelfId = req.params.bookshelfId
  const mangaId = req.params.mangaId
  const { userId } = req.session.auth;
  const bookShelves = [];
  for (let i = bookshelfId - 2; i < bookshelfId + 2; i++) {
    const bookShelf = await db.Bookshelf.findOne({
      where: {
        id: i
      }
    })
    if (bookShelf && userId === bookShelf.userId) {
      bookShelves.push(bookShelf.id)
    }
  }

  const mangaBookShelves = await db.MangaBookshelf.findAll({
    where: {
      bookshelfId: bookShelves,
      mangaId
    }
  })
  if (mangaBookShelves) {
    for (let i = 0; i < mangaBookShelves.length; i++) {
      await mangaBookShelves[i].destroy();
    }
  }

  //create new insert in our mangabookshelves table
  const newshelf = await db.MangaBookshelf.build({
    bookshelfId,
    mangaId
  })
  await newshelf.save()
})


router.get("/:id/reviews", async (req, res) => {
  const id = req.params.id
  const manga = await db.Manga.findByPk(id)
  let reviews = await db.Review.findAll({
    where: { mangaId: id },
    include: [
      { model: db.Manga, as: "Manga" },
      { model: db.User, as: "user" },
    ],
  });


  // if(reviews) {
  //   res.render('reviews', { reviews, manga, id})
  // } else {
  //   reviews = null
  //   res.render('reviews', {reviews, manga, id})
  // }

  if (req.session.auth) {
    const { userId } = req.session.auth;
    res.render("reviews", { reviews, userId, id });
  } else {
    const userId = null;
    res.render("reviews", { reviews, userId, id });
  }
})

router.get("/:id/reviews/add", csrfProtection, async (req, res) => {
  const id = req.params.id
  const manga = await db.Manga.findByPk(id)
  res.render('add-review', {
    manga,
    id,
    csrfToken: req.csrfToken(),
  })
});

const reviewValidators = [
  check('rating')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a rating between 1-5')
]



router.post("/:id/reviews/add", requireAuth, csrfProtection, reviewValidators,
  asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const manga = await db.Manga.findByPk(id)
    const { rating, comment } = req.body
    const { userId } = req.session.auth
    // do we need this:
    // const attraction = await db.Attraction.findByPk(attractionId, { include: ['park'] });
    const newReview = await db.Review.build({
      userId,
      mangaId: id,
      rating,
      comment
    })
    const validatorErrors = validationResult(req);


    if (validatorErrors.isEmpty()) {
      await newReview.save();
      res.redirect(`/mangas/${id}/`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("add-review", {
        newReview,
        manga,
        id,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
    // next()

  })
);

router.get("/:mangaId/reviews/edit/:reviewId", csrfProtection,
  asyncHandler(async (req, res) => {
    // const reviewId = parseInt(req.params.reviewId, 10);
    const mangaId = parseInt(req.params.mangaId, 10);
    const manga = await db.Manga.findByPk(mangaId)

    const reviewId = parseInt(req.params.reviewId, 10);
    const review = await db.Review.findByPk(reviewId);

    res.render("edit-review", {
      title: `Edit your review for ${manga.title} `,
      review,
      reviewId,
      mangaId,
      manga,
      csrfToken: req.csrfToken(),
    })
  })
);

router.post('/:mangaId/reviews/edit/:reviewId', csrfProtection, reviewValidators,//mangaid/edit/id
  asyncHandler(async (req, res) => {
    const mangaId = parseInt(req.params.mangaId, 10);
    const manga = await db.Manga.findByPk(mangaId);

    const reviewId = parseInt(req.params.reviewId, 10);
    const editReviewUpdate = await db.Review.findByPk(reviewId);

    const { rating, comment } = req.body;
    const review = { rating, comment }

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await editReviewUpdate.update(review);
      // editReviewUpdate.rating = rating
      // editReviewUpdate.comment = comment
      res.redirect(`/mangas/${mangaId}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('edit-review', {
        rating,
        reviewId,
        review,
        comment,
        mangaId,
        manga,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

// router.get('/:mangaId/reviews/:reviewId/delete', //mangaid/delete/id
//   asyncHandler(async (req, res) => {
//     const deleteId = parseInt(req.params.deleteId, 10);
//     const deleteReview = await db.Review.findByPk(deleteId);

//     res.render('delete-review', {
//       title: 'Delete Review',
//       deleteReview,
//       csrfToken: req.csrfToken(),
//     })
//   }));

router.post('/:mangaId/reviews/:reviewId/delete', //mangaid/delete/id
  async (req, res) => {
    const mangaId = parseInt(req.params.mangaId, 10);
    const reviewId = parseInt(req.params.reviewId, 10);
    const reviews = await db.Review.findOne({
      where: {
        id: reviewId,
        mangaId
      }
    });

    await reviews.destroy();
    res.json({
      message: "deleted"
    })
    // res.redirect(`/mangas`); //may be wrong path
  });



//START//
router.get("/:id/reviews/users/login", csrfProtection, (req, res) => {
  const id = req.params.id;
  res.render("review-user-login", {
    title: "Login",
    csrfToken: req.csrfToken(),
    id,
  });
});

// userAuth
const loginValidators = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password"),
];
// userAuth


// userAuth REVIEW
router.post("/:id/reviews/users/login", csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const id = req.params.id
  const { email, password } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    // Attempt to get the user by their email address.
    const user = await db.User.findOne({ where: { email } });


    if (user) {
      // If the user exists then compare their password
      // to the provided password.
      const passwordMatch = await bcrypt.compare(
        password,
        user.password.toString()
      );
      if (passwordMatch) {
        // If the password hashes match, then login the user
        // and redirect them to the default route.
        // TODO Login the user.
        loginUser(req, res, user);
        return res.redirect(`/mangas/${id}/reviews/add`);
      }
    }
    // Otherwise display an error message to the user.
    errors.push("Login failed for the provided email address and password");
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }
  res.render("review-user-login", {
    title: "Login",
    email,
    errors,
    csrfToken: req.csrfToken(),
  });

})
);
//END//

module.exports = router;
