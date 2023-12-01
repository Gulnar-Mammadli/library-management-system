"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("copies", {
      barcode: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      purchaseDate: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: true,
      },
      rackNumber: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
      },
      bookId: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: false,
          references: {
              model: "books",
              key: "id",
            },
      },
      price: {
          type: Sequelize.DataTypes.DECIMAL(10, 2),
          allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("copies");
  },
};
