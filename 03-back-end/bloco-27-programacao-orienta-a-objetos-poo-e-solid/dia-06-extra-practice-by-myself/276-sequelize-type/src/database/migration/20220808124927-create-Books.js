'use strict';
import attributes from '../attributes/Book.attributes';

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Books', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Books');
  }
};