"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bookings", {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      bookingType: {
        type: Sequelize.DataTypes.ENUM(["room", "computer"]),
        allowNull: false,
      },
      startTime: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
      },
      endTime: {
          type: Sequelize.DataTypes.DATE,
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
    await queryInterface.dropTable("bookings");
  },
};
