'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Book A',
        release_year: '2020',
        number_pages: 111,
      },
      {
        title: 'Book B',
        release_year: '2021',
        number_pages: 111
      },
      {
        title: 'Book C',
        release_year: '2022',
        number_pages: 111
      },
  ], {});

  },

  async down (queryInterface) {    
    await queryInterface.bulkDelete('Books', null, {});
    
  }
};
