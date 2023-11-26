const { connect } = require("../db");
const db = connect();

const Student = db.define(
  "Student",
  {
    id: {
      type: db.Sequelize.DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    registered: {
      type: db.Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    },
    code: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "students",
  }
);

Student.associate = (models) => {
  Student.belongsTo(models.User, {
    foreignKey: "user_id",
    allowNull: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

module.exports = Student;
