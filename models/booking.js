const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    bookingType: {
      type: DataTypes.ENUM(["room", "computer"]),
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
  }, 
  {
    tableName: "booking",
  }
);

module.exports = Booking;
