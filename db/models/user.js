'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING.BINARY
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review, {foreignKey: "userId", onDelete: 'CASCADE', hooks: true})
    User.hasMany(models.Bookshelf, {foreignKey: "userId", onDelete: 'CASCADE', hooks: true})
  };
  return User;
};
