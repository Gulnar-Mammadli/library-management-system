const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Copy = sequelize.define(
  "Copy",
  {
    barcode: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    purchaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    rackNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bookId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "books",
            key: "id",
          },
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
  },
  {
    tableName: "copies",
    timestamps: false,
  }
);

module.exports = Copy;
