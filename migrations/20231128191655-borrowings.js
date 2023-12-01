"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("borrowings", {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      borrowDate: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
      returnDate: {
          type: Sequelize.DataTypes.DATEONLY,
          allowNull: false,
      },
      dueDate: {
          type: Sequelize.DataTypes.DATEONLY,
          allowNull: false,
      },
      status: {
          type: Sequelize.DataTypes.ENUM(["Borrowed", "Returned"]),
          allowNull: false,
      },
      finePerDay: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.2,
      },
      totalFine: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      copyId: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        references: {
          model: "copies",
          key: "barcode",
        },
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
    await queryInterface.dropTable("borrowings");
  },
};
