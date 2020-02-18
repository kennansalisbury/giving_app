'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('giverItems', [
        {
        userId: 1,
        programItemId: 1,
        num_purchased: 10,
        dollars_spent: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        programItemId: 2,
        num_purchased: 5,
        dollars_spent: 75,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        programItemId: 4,
        num_purchased: 5,
        dollars_spent: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
