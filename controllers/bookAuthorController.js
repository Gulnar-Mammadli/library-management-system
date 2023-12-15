const BookAuthor = require("../models/bookAuthors");

const createBookAuthor = async (req, res) => {
  try {
    const newBookAuthor = await BookAuthor.create(req.body);
    return res.status(200).json({ newBookAuthor });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getAllBookAuthors = async (req, res) => {
  try {
    const allBookAuthors = await BookAuthor.findAll();
    return res.status(200).json({ allBookAuthors });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};


module.exports = {
  createBookAuthor,
  getAllBookAuthors,
};
