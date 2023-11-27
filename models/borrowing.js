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
    allowedNumBooks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    actualNumBooks: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isInRange(value) {
          if (value < 0 || value > 5) {
            throw new Error('actualNumBooks must be between 0 and 5');
          }
        },
    },
    },
    borrowDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    returnDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM(["Borrowed", "Returned"]),
        allowNull: false,
    },
    maxDay: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 15,
    },
  },
  {
    tableName: "bowwowings",
  }
);

module.exports = Borrowing;
