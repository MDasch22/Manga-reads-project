const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { User, Bookshelf, Manga } = require('../models');

// userAuth
const csrf = require('csurf');
const { loginUser, logoutUser } = require('../auth');
const csrfProtection = csrf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
// userAuth

// requireAuth
const { requireAuth } = require('../auth');
// requireAuth

// userAuth
const userValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 50 })
    .withMessage('Last Name must not be more than 50 characters long'),
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long'),

  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),

  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),

  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { emailAddress: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),

];
// userAuth
const loginValidators = [
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];
// userAuth

// userAuth

// userAuth REVIEW
router.post('/user/register', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      emailAddress,
      firstName,
      lastName,
      password,
    } = req.body;

    const user = db.User.build({
      emailAddress,
      firstName,
      lastName,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-register', {
        title: 'Register',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));
// userAuth REVIEW

// userAuth REVIEW
router.get('/user/login', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  });
});

router.post('/user/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      emailAddress,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      // TODO Attempt to login the user.
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('user-login', {
      title: 'Login',
      emailAddress,
      errors,
      csrfToken: req.csrfToken(),
    });
  }));
// userAuth REVIEW

// userAuth REVIEW
router.post('/user/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      emailAddress,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      // Attempt to get the user by their email address.
      const user = await db.User.findOne({ where: { emailAddress } });

      if (user !== null) {
        // If the user exists then compare their password
        // to the provided password.
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

        if (passwordMatch) {
          // If the password hashes match, then login the user
          // and redirect them to the default route.
          // TODO Login the user.
          loginUser(req, res, user);
          return res.redirect('/');
        }
      }

      // Otherwise display an error message to the user.
      errors.push('Login failed for the provided email address and password');
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('user-login', {
      title: 'Login',
      emailAddress,
      errors,
      csrfToken: req.csrfToken(),
    });
  }));
// userAuth REVIEW

// logout User
router.post('/user/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/user/login');
});
// logout User

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.render("users", { users });
});

router.get("/:id(\\d+)", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.render("profile", { user });
});

router.get("/:id/bookshelves", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.render("bookshelves", { user });
})

// userAuth REVIEW
router.get("/user/register", csrfProtection, (req, res) => { // REVIEW
  const user = db.User.build();
  res.render('user-register', { // REVIEW
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
});
// userAuth REVIEW

// userAuth REVIEW
router.post('/user/register', csrfProtection, userValidators, // REVIEW
  asyncHandler(async (req, res) => {
    const {
      emailAddress,
      firstName,
      lastName,
      password,
    } = req.body;

    const user = db.User.build({
      emailAddress,
      firstName,
      lastName,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await user.save();
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-register', {
        title: 'Register',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));
// userAuth REVIEW


router.get("/:id/bookshelves/1", async (req, res) => {
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
// userAuth
module.exports = { csrfProtection, asyncHandler }
// userAuth
