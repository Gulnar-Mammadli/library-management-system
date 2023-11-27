"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "postalAddress");
    await queryInterface.addColumn("users", "postalAddress", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
