'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Book A',
        releaseYear: 2020,
        numberPages: 111
      },
      {
        title: 'Book A',
        releaseYear: 2020,
        numberPages: 111
      },
      {
        title: 'Book A',
        releaseYear: 2020,
        numberPages: 111
      },
  ], {});

  },

  async down (queryInterface) {    
    await queryInterface.bulkDelete('Books', null, {});
    
  }
};
