const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Subject = sequelize.define(
  "Subject",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, 
  {
    tableName: "subjects",
  }
);

module.exports = Subject;
