'use strict';

const { password } = require("pg/lib/defaults");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "bo",
          lastName: "bobus",
          email: "bo@bobus.com",
          password: "bo888",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "bobo",
          lastName: "bobus",
          email: "bobo@bobus.com",
          password: "bobo888",
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
   return queryInterface.bulkDelete('Users', null, {});
  }
};
