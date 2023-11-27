const Student = require("../models/Student");
const User = require("../models/User");
const { createUser } = require("./userController");

const createStudent = async (req, res) => {
  try {
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

const updateStudent = async (req, res) => {
  try {
    console.log("her1");
    const { username } = req.body;
    const user = await User.findOne({ where: { username: username } });
    if (user) {
      console.log("her2");
      await User.update(req.body, {
        where: { username: user.username },
      });
      const [num] = await Student.update(req.body, {
        where: { userId: user.id },
      });
      console.log(num);
      if (num === 1) {
        const updatedStudent = await Student.findOne({
          where: { userId: user.id },
        });

        return res.status(201).json({ updatedStudent });
      } else {
        return res.status(404).json({ mes: "User not found" });
      }
    }
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const user = await User.findByPk(req.query.userId);
    const student = await Student.findByPk(req.query.id);
    await user.destroy();
    await student.destroy();
    res.status(200).json({ mes: "User is successfully deleted" });
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
};
