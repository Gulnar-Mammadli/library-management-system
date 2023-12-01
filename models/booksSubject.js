const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const BookSubject = sequelize.define(
  "BookSubject",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "books",
        key: "id",
      },
    },
    subjectId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "subjects",
          key: "id",
        },
      },
  },
  {
    tableName: "bookSubjects",
    timestamps: false,
  }
);

module.exports = BookSubject;
