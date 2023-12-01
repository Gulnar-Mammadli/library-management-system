"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bookAuthors", {
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
      authorId: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: "authors",
            key: "id",
          },
        },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bookAuthors");
  },
};
