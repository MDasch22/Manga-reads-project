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
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        mangaId: "1",
        rating: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
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
