const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Borrowing = sequelize.define(
  "Borrowing",
  {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      borrowDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      returnDate: {
          type: DataTypes.DATEONLY,
          allowNull: true,
      },
      dueDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
      },
      status: {
          type: DataTypes.ENUM(["Borrowed", "Returned"]),
          allowNull: false,
      },
      totalFine: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
      },
      copyId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "copies",
          key: "barcode",
        },
      },
      studentId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "students",
          key: "id",
        },
      },
    
  },
  {
    tableName: "borrowings",
    timestamps: false,
  }
);

module.exports = Borrowing;
