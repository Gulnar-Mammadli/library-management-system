const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const ComputerBooking = sequelize.define(
  "ComputerBooking",
  {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      licenseNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      os: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      number: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: false,
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
    tableName: "computerBookings",
    timestamps: false,
  }
);

module.exports = ComputerBooking;
