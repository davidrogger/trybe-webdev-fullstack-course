'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize.queryInterface')} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  async up (queryInterface, Sequelize) {    
    await queryInterface.createTable('User_Books', {
      userId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      bookId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'book_id',
        references: {
          model: 'Books',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('User_Books');
  }
};
