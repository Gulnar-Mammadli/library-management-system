'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('users', 'role',{ 
      type: Sequelize.DataTypes.ENUM(["Student", "Admin", "Librarian"]),
      allowNull: true,
      defaultValue: "Student",
     
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.remove('users', 'role');
   
  }
};


