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
      getRegistered(){
        return this.registered;
      }
    },
    allowedNumBooks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        setNumBooks() {
          let value = getRegistered();
          if (instance.registered === true) {
            instance.allowedNumBooks = 5;
          } else {
            instance.allowedNumBooks = 1;
          }
        },
    },
    
        },
    actualNumBooks: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isInRange(value) {
          if (value < 0 || value > 5) {
            throw new Error('actualNumBooks must be between 0 and 5');
          }
        },
    },
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
