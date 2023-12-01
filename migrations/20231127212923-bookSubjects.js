"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bookSubjects", {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
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
      subjectId: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: "subjects",
            key: "id",
          },
        },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bookSubjects");
  },
};
