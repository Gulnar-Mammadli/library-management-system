const User = require("../models/User");
const Student = require("../models/Student");

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

const login = async (req, res) => {
  await User.findOne({ where: { username: req.body.username } })
    .then(async (user) => {
      if (req.body.password === user.password) {
        if (req.body.role === "student") {
          const student = await Student.findOne({ where: { userId: user.id } });
          if (student) {
            const data = {
              username: user.username,
              password: user.password,
              role: req.body.role,
            };
            return res.status(200).json({ data });
          }
        }
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
