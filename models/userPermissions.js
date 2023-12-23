const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const UserPermission = sequelize.define(
  "UserPermission",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,

      references: {
        model: "users",
        key: "id",
      },
    },
    permissionId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "permissions",
        key: "id",
      },
    },
  },
  {
    tableName: "userPermissions",
    timestamps: false,
  }
);

module.exports = UserPermission;
