const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const BookAuthor = sequelize.define(
  "BookAuthor",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "book",
        key: "id",
      },
    },
    authorId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "author",
          key: "id",
        },
      },
  },
  {
    tableName: "bookAuthors",
  }
);

module.exports = BookAuthor;
