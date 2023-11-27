const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Employee = sequelize.define(
  "Employee",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(["Admin", "Librarian"]),
      allowNull: false,
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
    tableName: "employees",
  }
);

module.exports = Employee;
