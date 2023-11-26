const { connect } = require("../db");
const db = connect();

const User = db.define(
  "User",
  {
    id: {
      type: db.Sequelize.DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    postalAddress: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: db.Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    gender: {
      type: db.Sequelize.DataTypes.ENUM(["male", "female"]),
      allowNull: true,
    },
  },
  {
    tableName: "users",
  }
);

User.associate = (models) => {
  User.hasOne(models.Student);
};

module.exports = User;
