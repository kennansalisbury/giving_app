'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('organizations', [{
        name: 'United Way',
        email: 'unitedway@email.com',
        street_address: '12345 United Way',
        city: 'Seattle',
        state: 'WA',
        zip: '98103',
        phone: '9017864259',
        description: 'We are an organization focused on donors and giving.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('organizations', null, {});
  }
};
