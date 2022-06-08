'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Bookshelf.associate = function(models) {
    // associations can be defined here
    Bookshelf.belongsTo(models.User, {foreignKey: "userId"})
    Bookshelf.belongsToMany(models.Manga, {
      through: "MangaBookshelf",
      foreignKey: "bookshelfId",
      otherKey: "mangaId",
    })
  };
  return Bookshelf;
};
