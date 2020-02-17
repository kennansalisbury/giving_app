'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('programs', [{
        name: 'Diaper Drive',
        description: 'Looking for diaper donations, all sizes. Also accepting wipes and other changing table supplies.',
        startDate: '2020-02-14',
        endDate: '2020-02-21',
        organizationId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'School Supplies',
        description: 'Local schools looking for school supplies',
        startDate: '2020-02-17',
        endDate: '2020-02-30',
        organizationId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Winter Clothes',
        description: 'Shelter in need of winter clothes for shelter guests',
        startDate: '2020-02-19',
        endDate: '2020-03-19',
        organizationId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Summer Clothes',
        description: 'Shelter in need of summer clothes for shelter guests',
        startDate: '2020-05-19',
        endDate: '2020-07-19',
        organizationId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('programs', null, {});
  }
};
