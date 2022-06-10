'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Bookshelves",
      [
        {
          userId: "1",
          name: "Want To Read",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "1",
          name: "Currently Reading",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "1",
          name: "Read",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3",
          name: "Want To Read",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3",
          name: "Currently Reading",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3",
          name: "Read",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Bookshelves', null, {});
  },
};
