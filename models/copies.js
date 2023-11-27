const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Copy = sequelize.define(
  "Copy",
  {
    barcode: {
      type: DataTypes.STRING,
      autoIncrement: true,
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
            model: "book",
            key: "id",
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
  },
  {
    tableName: "copies",
  }
);

module.exports = Copy;
