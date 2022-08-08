'use strict';

module.exports = {
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
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: 'release_year'
      },
      numberPages: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field: 'release_pages'
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Books');
  }
};