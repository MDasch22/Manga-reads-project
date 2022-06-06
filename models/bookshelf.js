'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Bookshelf.associate = function(models) {
    // associations can be defined here
    Bookshelf.belongsTo(models.User, {as:"user", foerignKey: "userId"})
    Bookshelf.belongsToMany(models.Manga, {
      as: "manga",
      through: "MangaBookshelf",
      foerignKey: "bookshelfId",
      otherKey: "mangaId",
    })
  };
  return Bookshelf;
};
