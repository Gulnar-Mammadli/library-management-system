"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("students", "user_id", "userId");
  },

  async down(queryInterface, Sequelize) {},
};
