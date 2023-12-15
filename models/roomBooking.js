const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const RoomBooking = sequelize.define(
  "RoomBooking",
  {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
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
    tableName: "roomBookings",
    timestamps: false,
  }
);

module.exports = RoomBooking;