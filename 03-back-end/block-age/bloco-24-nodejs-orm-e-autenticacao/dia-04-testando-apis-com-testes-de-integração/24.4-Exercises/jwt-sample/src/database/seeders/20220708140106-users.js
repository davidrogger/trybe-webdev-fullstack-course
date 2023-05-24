'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        password: '12345'
      },
      {
        name: 'mysuk',
        password: 'yareyare',
      }
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
