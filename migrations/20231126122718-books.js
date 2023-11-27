'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn("books", "num_pages", "numPages");
    await queryInterface.renameColumn("books", "total_copies", "totalCopies");
    await queryInterface.renameColumn("books", "production_year", "productionYear");
    await queryInterface.renameColumn("books", "num_available_copies", "numAvailableCopies");
  },


};
