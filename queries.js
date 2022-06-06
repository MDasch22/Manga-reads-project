const {Manga, User, Bookshelf, MangaBookshelf} = require("./models");
// const mangabookshelf = require("./models/mangabookshelf");
// const Bookshelf = require("./models/bookshelf");

async function doesMangaExistForUser(id) {
  const user = await User.findByPk(id, {
    include: {model: Bookshelf, include: {model: MangaBookshelf}},
    // where: {
    //   userId,
    //   mangaId
    // },
  })
  console.log(JSON.stringify(user,null, 2));
}

doesMangaExistForUser(1)

//this function returns the manga with the given id if it exists with the bookshelfId. otherwise, it'll return null.

module.exports = doesMangaExistForUser;
