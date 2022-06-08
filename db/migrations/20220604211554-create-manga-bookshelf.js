'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("MangaBookshelves", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bookshelfId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Bookshelves"},
      },
      mangaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Mangas"},
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
    return queryInterface.dropTable('MangaBookshelves');
  }
};
