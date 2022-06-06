'use strict';
module.exports = (sequelize, DataTypes) => {
  const MangaBookshelf = sequelize.define('MangaBookshelf', {
    bookshelfId: DataTypes.INTEGER,
    mangaId: DataTypes.INTEGER
  }, {});
  MangaBookshelf.associate = function(models) {
    // associations can be defined here
  };
  return MangaBookshelf;
};
