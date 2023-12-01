const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Publisher = sequelize.define(
  "Publisher",
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
    address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      copyId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "copies",
          key: "barcode",
        },
      },
  }, 
  {
    tableName: "publishers",
    timestamps: false,
  }
);

module.exports = Publisher;
