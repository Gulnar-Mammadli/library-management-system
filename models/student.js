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
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    tableName: "students",
  }
);

module.exports = Student;
