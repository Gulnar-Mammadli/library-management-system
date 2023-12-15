const Student = require("../models/Student");
const User = require("../models/User");
const Code = require("../models/codes");

const createStudent = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    if (newUser) {
      console.log("here");
      const { id } = newUser;
      let registered = false;
      let allowedBooks = 1;
      const isUniversityStudent = await Code.findOne({
        where: { codeName: req.body.code },
      });
      console.log(isUniversityStudent);
      if (isUniversityStudent) {
        registered = true;
        allowedBooks = 5;
      }
      const data = {
        registered: registered,
        code: req.body.code,
        userId: id,
        allowedNumBooks: allowedBooks,
      };

      const newStudent = await Student.create(data);
      return res.status(201).json({ newStudent });
    }
  } catch (error) {
    return res.status(500).json({ mes: error });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.findAll();
    return res.status(200).json({ allStudents });
  } catch (error) {
    return res.status(500).json({ mes: error });
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
    return res.status(200).json({ mes: "User is successfully deleted" });
  } catch (error) {
    return res.status(500).json({ mes: error });
  }
};

const changePassword = async (req, res) => {
  let user = await User.findOne({ where: { username: req.body.username } });
  try {
    const userWithPassword = await User.findAll({
      where: { password: req.body.password },
    });
    user = { ...user, password: req.body.password };
    await User.update(user, {
      where: { username: req.body.username },
    });
    return res.status(200).json({ msg: "Password successfully updated" });
  } catch (error) {
    return res.status(500).json({ msg: "This password already exists" });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
  changePassword,
};
