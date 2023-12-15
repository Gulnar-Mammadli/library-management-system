const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Code = sequelize.define(
  "Code",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    codeName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, 
  {
    tableName: "codes",
    timestamps: false,
  }
);

module.exports = Code;