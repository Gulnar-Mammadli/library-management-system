const Author = require("../models/authors");

const createAuthor = async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);
    return res.status(200).json({ newAuthor });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await Author.findAll();
    return res.status(200).json({ allAuthors });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};


module.exports = {
  createAuthor,
  getAllAuthors,
};
