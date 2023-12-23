"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("permissions", {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      method: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      route: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      hasPermission: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("permissions");
  },
};
