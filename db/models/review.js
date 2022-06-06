'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    mangaId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {as: 'user', foreignKey: "userId"})
    Review.belongsTo(models.Manga, { foreignKey: "mangaId"})
  };
  return Review;
};
