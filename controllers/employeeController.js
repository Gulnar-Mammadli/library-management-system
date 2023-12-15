const Employee = require("../models/Employee");
const User = require("../models/User");

const createEmployee = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    if (newUser) {
      const { id } = newUser;
      const data = {
        role: req.body.role,
        userId: id,
      };
      const newEmployee = await Employee.create(data);
      return res.status(201).json({ newEmployee });
    }
  } catch (error) {
    return res.status(500).json({ mes: error });
  }
};

const getEmployee = async (req, res) => {
  try {
    const allEmployee = await Employee.findAll();
    return res.status(200).json({ allEmployee });
  } catch (error) {
    return res.status(500).json({ mes: error });
  }
};

module.exports = {
  createEmployee,
  getEmployee,
};