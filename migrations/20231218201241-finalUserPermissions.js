"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("userPermissions", {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
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
      permissionId: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "permissions",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("userPermissions");
  },
};
