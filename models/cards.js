const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Card = sequelize.define(
  "Card",
  {
    cardNumber: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    actv_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM(["Activated", "Deactivated"]),
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM(["Book", "Room", "Computer"]),
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
    tableName: "cards",
    timestamps: false,
  }
);

module.exports = Card;
