'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("books", {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      ISBN: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      title: {
        type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      language: {
        type: Sequelize.DataTypes.STRING,
          allowNull: true,
      },
      num_pages: {
        type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
      },
      production_year: {
        type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
      },
      total_copies: {
        type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
      },
      num_available_copies: {
        type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};
