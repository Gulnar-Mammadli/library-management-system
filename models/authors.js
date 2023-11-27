const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Author = sequelize.define(
  "Author",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, 
  {
    tableName: "authors",
  }
);

module.exports = Author;
