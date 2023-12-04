const User = require("../models/user");
const Code = require("../models/codes");

const createCode = async (req, res) => {
  try {
    const newCode = await Code.create(req.body);
    res.status(201).json({ newCode });
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

const getAllCodes = async (req, res) => {
  try {
    const allCodes = await Code.findAll();
    res.status(200).json({ allCodes });
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

module.exports = {
  createCode,
  getAllCodes,
};
