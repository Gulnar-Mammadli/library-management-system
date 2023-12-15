const Book = require("../models/books");

const createBook = async (req, res) => {
  try {
    const numAvailableCopies = req.body.totalCopies;
    const newBook = await Book.create({...req.body, numAvailableCopies});
    return res.status(200).json({ newBook });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.findAll();
    return res.status(200).json({ allBooks });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};


module.exports = {
  createBook,
  getAllBooks,
};
