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
          firstName: "Elias",
          lastName: "Rodriguez",
          email: "elias@gmail.com",
          password: "Elias",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Erik",
          lastName: "Nguyen",
          email: "Erik@gmail.com",
          password: "Erik",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Guest",
          lastName: "User",
          email: "guest@user.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jingxun",
          lastName: "Yin",
          email: "Jingxun@gmail.com",
          password: "Jingxun",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Michael",
          lastName: "Dasch",
          email: "michael@gmail.com",
          password: "Michael",
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
