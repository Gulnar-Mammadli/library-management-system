'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('employees', 'hireDate',{ 
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,     
    });

    await queryInterface.addColumn('employees', 'leaveDate',{ 
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: true, 
    });

    await queryInterface.addColumn('employees', 'salary',{ 
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.remove('employees', 'hireDate');
     await queryInterface.remove('employees', 'leaveDate');
     await queryInterface.remove('employees', 'salary');
  }
};
