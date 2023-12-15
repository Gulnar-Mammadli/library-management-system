'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('computerBookings', { 
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      licenseNumber: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      os: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
      number: {
          type: Sequelize.DataTypes.STRING,
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('computerBookings');
  }
};
