'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Mangas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      coverImg: {
        type: Sequelize.STRING,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Mangas');
  }
};
