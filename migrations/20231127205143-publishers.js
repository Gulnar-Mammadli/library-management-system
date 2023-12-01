"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("publishers", {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("publishers");
  },
};
