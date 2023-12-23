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
    hireDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    leaveDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
  },
  {
    tableName: "employees",
    timestamps: false,
  }
);

module.exports = Employee;