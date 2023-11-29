const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    registered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    allowedNumBooks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    actualNumBooks: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "students",
    timestamps: false,
  }
);

module.exports = Student;
