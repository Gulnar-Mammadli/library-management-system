const Copy = require("../models/copies");

const createCopy = async (req, res) => {
  try {
    const newCopy = await Copy.create(req.body);
    res.status(200).json({ newCopy });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllCopies = async (req, res) => {
  try {
    const allCopies = await Copy.findAll();
    res.status(200).json({ allCopies });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};


module.exports = {
  createCopy,
  getAllCopies,
};
