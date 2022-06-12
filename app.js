const express = require('express');

//PACKAGES
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const createError = require('http-errors');


const { sessionSecret } = require("./config");

const db = require("./db/models");
//ROUTERS
const usersRouter = require('./routes/users');
const mangaRouter = require('./routes/mangas');
const guestRouter = require('./routes/guest')
const { restoreUser } = require('./auth');

//CREATING APP OBJECT
const app = express();

//CSS AND FRONT-END JS GOES IN THIS FILE IN SUB-DIRECTORIES.
app.use(express.static('./public'));

//SETTINGS
app.set("view engine", "pug");
app.use(logger('dev'));
// PERSISTING USER STATE
// app.use(cookieParser(sessionSecret));
app.use(cookieParser())
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
}));


// const SequelizeStore = require('connect-session-sequelize')


app.use(express.urlencoded({ extended: false }));
app.use(restoreUser);
//ROUTER USE
app.use('/users', usersRouter);
app.use('/mangas', mangaRouter);
app.use("/guest", guestRouter)




// create Session table if it doesn't already exist
// store.sync();





//ROUTE HANDLERS//
//req and the res are given to us by express.
//req has all of the request info from forms and stuff
//and the res is what we give it in the cb below.
app.get('/', async (req, res) => {
  //send is a built-in response method.
  const mangas = await db.Manga.findAll();
  res.render('home', {
    //THIS OBJECT IS THE BRIDGE BETWEEN OUR FRONTEND AND BACKEND. MOST IMPORTANT THING.
    sentence: "bobus moment",
    title: "Mangas",
    mangas
  })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('errorAll');
});



app.all('*', (req, res) => {
  res.render('errorAll', {
    error: "bruh are you fr rn"
  })
})

module.exports = app;
