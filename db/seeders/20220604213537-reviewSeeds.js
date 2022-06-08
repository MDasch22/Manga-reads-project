'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: "2",
        mangaId: "1",
        rating: "4",
        comment:"Loved it, would recommend to a friend ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        mangaId: "1",
        rating: "5",
        comment: "One of the best things I've ever read, would read again",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        mangaId: "3",
        rating: "5",
        comment: "One of the best things I've ever read, would read again",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        mangaId: "4",
        rating: "5",
        comment: "GOATED",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        mangaId: "2",
        rating: "4",
        comment: "Whatta classic would read again",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
