'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('MangaBookshelves', [
    {
     bookshelfId: "4",
     mangaId: "1",
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     bookshelfId: "4",
     mangaId: "3",
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     bookshelfId: "4",
     mangaId: "5",
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     bookshelfId: "5",
     mangaId: "2",
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     bookshelfId: "5",
     mangaId: "4",
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     bookshelfId: "5",
     mangaId: "6",
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     bookshelfId: "6",
     mangaId: "7",
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     bookshelfId: "6",
     mangaId: "8",
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     bookshelfId: "6",
     mangaId: "10",
     createdAt: new Date(),
     updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('MangaBookshelves', null, {});
  }
};
