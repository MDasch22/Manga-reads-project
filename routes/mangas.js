const express = require("express");
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')

// userAuth
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require("../auth");

//WILL ALLOW GUEST USER TO ADD PICTURE OF NEW BOOK CREATED

const router = express.Router();
const path = require("path")
const cookieParser = require("cookie-parser")

// userAuth

// requireAuth
const { requireAuth } = require('../auth');
const { parse } = require("path");
// requireAuth

// router.use(cookieParser);
const checkPermissions = (review, currentUser) => {
  // const reviews = await db.Review.findOne({
  //   where:{
  //     mangaId: manga.id,
  //     userId: currentUser.id
  //   }
  // })
  console.log(review.comment, review.id, currentUser.id)
  if (review.userId !== currentUser.id) {
    const err = new Error('You are not authorized to edit!');
    err.status = 403; // Forbidden
    throw err;
  }
};

router.get("/", async (req, res) => {
  const mangas = await db.Manga.findAll();
  res.render('mangas', { mangas });
})

router.get("/:mangaId", async (req, res) => {
  const mangaId = req.params.mangaId
  const manga = await db.Manga.findByPk(mangaId);
  //need bookshleves here
  //use the auth to get user id
  //findall bookshleves where userId = user.id
  if (req.session.auth) {
    const { userId } = req.session.auth;
    const bookshelves = await db.Bookshelf.findAll({
      where: { userId }
    })
    res.render("manga", { manga, bookshelves, userId });
  } else {
    const userId = null
    res.render("manga", { manga, userId });
  }
})



router.post("/:mangaId/bookshelves/:bookshelfId", requireAuth, async (req, res) => {
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
    include: [db.Manga, db.User],
  });


  // if(reviews) {
  //   res.render('reviews', { reviews, manga, id})
  // } else {
  //   reviews = null
  //   res.render('reviews', {reviews, manga, id})
  // }
  res.render("reviews", { reviews, id})
  // if (req.session.auth) {
  //   const { userId } = req.session.auth;
  //   res.render();
  // } else {
  //   const userId = null;
  //   res.render("reviews", { reviews, userId, id });
  // }
})

router.get("/:id/reviews/add", requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const id = req.params.id
  const manga = await db.Manga.findByPk(id)
  res.render('add-review', {
    manga,
    id,
    csrfToken: req.csrfToken(),
  })
}));

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
    console.log(validatorErrors)


    if (validatorErrors.isEmpty()) {
      await newReview.save();
      res.redirect(`/mangas/${id}/reviews`);
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

router.get("/:mangaId/reviews/edit/:reviewId", requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    // const reviewId = parseInt(req.params.reviewId, 10);
    const mangaId = parseInt(req.params.mangaId, 10);
    const manga = await db.Manga.findByPk(mangaId)

    const reviewId = parseInt(req.params.reviewId, 10);
    const review = await db.Review.findByPk(reviewId);

    checkPermissions(review, res.locals.user)

    res.render("edit-review", {
      title: `Edit your review for ${manga.title} `,
      review,
      reviewId,
      mangaId,
      manga,
      csrfToken: req.csrfToken(),
    })
  }));

router.post('/:mangaId/reviews/edit/:reviewId', requireAuth, csrfProtection, reviewValidators,//mangaid/edit/id
  asyncHandler(async (req, res) => {
    const mangaId = parseInt(req.params.mangaId, 10);
    const manga = await db.Manga.findByPk(mangaId);

    const reviewId = parseInt(req.params.reviewId, 10);
    const editReviewUpdate = await db.Review.findByPk(reviewId);

    checkPermissions(editReviewUpdate, res.locals.user)

    const { rating, comment } = req.body;
    const review = { rating, comment }

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await editReviewUpdate.update(review);
      // editReviewUpdate.rating = rating
      // editReviewUpdate.comment = comment
      res.redirect(`/mangas/${mangaId}/reviews`);
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

router.post('/:mangaId/reviews/:reviewId/delete', requireAuth,//mangaid/delete/id
  asyncHandler( async (req, res) => {
    const mangaId = parseInt(req.params.mangaId, 10);
    const manga = db.Manga.findByPk(mangaId)
    const reviewId = parseInt(req.params.reviewId, 10);

    checkPermissions(manga, reviewId, res.locals.user)
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
  }));



//START//
// router.get("/:id/reviews/users/login", csrfProtection, (req, res) => {
//   const id = req.params.id;
//   res.render("review-user-login", {
//     title: "Login",
//     csrfToken: req.csrfToken(),
//     id,
//   });
// });

// userAuth
// const loginValidators = [
//   check("email")
//     .exists({ checkFalsy: true })
//     .withMessage("Please provide a value for Email Address"),
//   check("password")
//     .exists({ checkFalsy: true })
//     .withMessage("Please provide a value for Password"),
// ];
// userAuth


// userAuth REVIEW
// router.post("/:id/reviews/users/login", csrfProtection, loginValidators, asyncHandler(async (req, res) => {
//   const id = req.params.id
//   const { email, password } = req.body;

//   let errors = [];
//   const validatorErrors = validationResult(req);

//   if (validatorErrors.isEmpty()) {
//     // Attempt to get the user by their email address.
//     const user = await db.User.findOne({ where: { email } });

//     console.log(user);
//     if (user) {
//       // If the user exists then compare their password
//       // to the provided password.
//       console.log("before password match");
//       const passwordMatch = await bcrypt.compare(
//         password,
//         user.password.toString()
//       );
//       console.log(passwordMatch);
//       if (passwordMatch) {
//         // If the password hashes match, then login the user
//         // and redirect them to the default route.
//         // TODO Login the user.
//         console.log("matched");
//         loginUser(req, res, user);
//         return res.redirect(`/mangas/${id}/reviews/add`);
//       }
//     }
//     // Otherwise display an error message to the user.
//     errors.push("Login failed for the provided email address and password");
//   } else {
//     errors = validatorErrors.array().map((error) => error.msg);
//   }

//   res.render("review-user-login", {
//     title: "Login",
//     email,
//     errors,
//     csrfToken: req.csrfToken(),
//   });
// })
// );
//END//

module.exports = router;
