const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    ISBN: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    language: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    numPages: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    productionYear: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    totalCopies: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    numAvailableCopies: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  }, 
  {
    tableName: "books",
  }
);

module.exports = Book;
