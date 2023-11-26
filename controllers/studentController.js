const Student = require("../models/Student");
const User = require("../models/User");
const { createUser } = require("./userController");

const createStudent = async (req, res) => {
  try {
    console.log(req.body);
    const newUser = await User.create(req.body);
    if (newUser) {
      const { id } = newUser;
      const data = {
        registered: req.body.registered,
        code: req.body.code,
        userId: id,
      };
      const newStudent = await Student.create(data);
      res.status(201).json({ newStudent });
    }
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.findAll();
    res.status(200).json({ allStudents });
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
};
