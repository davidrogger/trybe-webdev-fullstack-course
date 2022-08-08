'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize')} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      releaseYear: {
        type: Sequelize.STRING(4),
        allowNull: false,
        field: 'release_year'
      },
      numberPages: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'release_pages'
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Books');
  }
};