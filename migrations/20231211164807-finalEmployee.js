'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('employees', { 
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      role: {
        type: Sequelize.DataTypes.ENUM(["Admin", "Librarian"]),
        allowNull: false,
      },
      userId: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('employees');
  }
};
