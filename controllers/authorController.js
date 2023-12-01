const Author = require("../models/authors");

const createAuthor = async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(200).json({ newAuthor });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await Author.findAll();
    res.status(200).json({ allAuthors });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};


module.exports = {
  createAuthor,
  getAllAuthors,
};
