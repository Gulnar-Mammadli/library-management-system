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
      res.status(201).json({ newEmployee });
    }
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

const getEmployee = async (req, res) => {
  try {
    const allEmployee = await Employee.findAll();
    res.status(200).json({ allEmployee });
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

module.exports = {
  createEmployee,
  getEmployee,
};
