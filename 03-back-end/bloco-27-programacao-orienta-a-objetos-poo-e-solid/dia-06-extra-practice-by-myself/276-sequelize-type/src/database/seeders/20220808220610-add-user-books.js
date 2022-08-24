'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('User_Books', [
      { user_id: 1, book_id: 1 },
      { user_id: 1, book_id: 3 },
      { user_id: 2, book_id: 1 },
      { user_id: 2, book_id: 2 },
      { user_id: 3, book_id: 1 },
      { user_id: 3, book_id: 2 },
      { user_id: 3, book_id: 3 },
  ], {});

  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('User_Books', null, {});
  }
};
