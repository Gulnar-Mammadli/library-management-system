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
        model: "book",
        key: "id",
      },
    },
    subjectId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "subject",
          key: "id",
        },
      },
  },
  {
    tableName: "bookSubjects",
  }
);

module.exports = BookSubject;
