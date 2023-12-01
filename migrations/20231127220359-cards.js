"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cards", {
      cardNumber: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      actv_date: {
          type: Sequelize.DataTypes.DATEONLY,
          allowNull: false,
      },
      status: {
          type: Sequelize.DataTypes.ENUM(["Activated", "Deactivated"]),
          allowNull: false,
      },
      type: {
          type: Sequelize.DataTypes.ENUM(["Book", "Room", "Computer"]),
          allowNull: false,
      },
      studentId: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "students",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cards");
  },
};
