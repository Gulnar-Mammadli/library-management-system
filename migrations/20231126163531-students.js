'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('students', 'allowedNumBooks', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    });

    await queryInterface.addColumn('students', 'actualNumBooks', {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isInRange(value) {
          if (value < 0 || value > 5) {
            throw new Error('actualNumBooks must be between 0 and 5');
          }
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('students', 'allowedNumBooks');
    await queryInterface.removeColumn('students', 'actualNumBooks');
  }
};
