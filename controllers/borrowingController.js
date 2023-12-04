const Borrowing = require("../models/borrowing");

const createBorrowing = async (req, res) => {
  try {
    const newBorrowing = await Borrowing.create(req.body);
    res.status(200).json({ newBorrowing });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllBorrowings = async (req, res) => {
  try {
    const allBorrowings = await Borrowing.findAll();
    res.status(200).json({ allBorrowings });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  createBorrowing,
  getAllBorrowings,
};
