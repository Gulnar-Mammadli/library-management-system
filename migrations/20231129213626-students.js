"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("students", {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      registered: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
      },
      code: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      userId: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      allowedNumBooks: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      actualNumBooks: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("students");
  },
};
