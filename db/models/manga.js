'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manga = sequelize.define('Manga', {
    coverImg: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.TEXT,
    genre: DataTypes.STRING,
    releaseDate: DataTypes.DATE
  }, {});
  Manga.associate = function(models) {
    // associations can be defined here
    Manga.hasMany(models.Review, {as: "review", foreignKey: "mangaId"})
    Manga.belongsToMany(models.Bookshelf, {
      as: "bookshelf",
      through: "MangaBookshelf",
      foreignKey: "mangaId",
      otherKey: "bookshelfId"
    })
  };
  return Manga;
};
