const User = require("../models/User");
const Student = require("../models/Student");
const Employee = require("../models/Employee");

const createUser = async (data) => {
  try {
    const newUser = await User.create(data);
    return newUser;
  } catch (error) {
    return { error };
  }
};

const login = async (req, res) => {
  await User.findOne({ where: { username: req.body.username } })
    .then(async (user) => {
      if (req.body.password === user.password) {
        const userRole = req.body.role;
        if (userRole === "Student") {
          const student = await Student.findOne({ where: { userId: user.id } });
          if (!student) {
            return res.status(404).json({ msg: "Student not found" });
          }
        } else if (userRole === "Librarian") {
          const librarian = await Employee.findOne({
            where: { userId: user.id, role: userRole },
          });
          if (!librarian) {
            return res.status(404).json({ msg: "Librarian not found" });
          }
        } else if (userRole === "Admin") {
          const admin = await Employee.findOne({
            where: { userId: user.id, role: userRole },
          });
          if (!admin) {
            return res.status(404).json({ msg: "Admin not found" });
          }
        } else {
          return res.status(404).json({ msg: "Role not found" });
        }
        const data = {
          username: user.username,
          password: user.password,
          role: req.body.role,
        };
        return res.status(200).json({ data });
      } else {
        return res.status(400).json({ msg: "Incorrect password" });
      }
    })
    .catch((error) => {
      return res.status(404).json({ msg: "User not found", error });
    });
};

module.exports = {
  createUser,
  login,
};
