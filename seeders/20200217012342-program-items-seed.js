'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('programItems', [{
        name: 'diaper',
        goal_num: 500,
        url: 'https://www.amazon.com/s?k=diapers',
        description: 'all sizes',
        programId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'baby wipes',
        goal_num: 500,
        url: 'https://www.amazon.com/s?k=babywipes',
        description: 'non-scented',
        programId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'baby powder',
        goal_num: 200,
        url: 'https://www.amazon.com/s?k=babypowder',
        description: '12oz bottles',
        programId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pencil packs',
        goal_num: 1000,
        url: 'https://www.amazon.com/s?k=pencils',
        description: 'regular no. 2',
        programId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'expo marker packs',
        goal_num: 300,
        url: 'https://www.amazon.com/s?k=expo+markers',
        description: 'all colors and sizes',
        programId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '5-ring notebooks',
        goal_num: 600,
        url: 'https://www.amazon.com/s?k=notebooks',
        description: 'lined paper',
        programId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pairs of Socks - size M',
        goal_num: 600,
        url: 'https://www.amazon.com/s?k=socks',
        description: 'women and men, size medium',
        programId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Childrens Coats',
        goal_num: 600,
        url: 'https://www.amazon.com/s?k=child+coat',
        description: 'girl or boy size sm, m, l',
        programId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Women\'s shorts',
        goal_num: 200,
        url: 'https://www.amazon.com/s?k=womens+shorts',
        description: 'all sizes',
        programId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Men\'s shorts',
        goal_num: 200,
        url: 'https://www.amazon.com/s?k=mens+shorts',
        description: 'all sizes',
        programId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sandals',
        goal_num: 500,
        url: 'https://www.amazon.com/s?k=sandals',
        description: 'all sizes',
        programId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-shirts',
        goal_num: 1000,
        url: 'https://www.amazon.com/s?k=tshirts',
        description: 'all sizes, men and women',
        programId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('programItems', null, {});
  }
};
