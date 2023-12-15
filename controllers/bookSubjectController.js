const BookSubject = require("../models/bookSubject");

const createBookSubject = async (req, res) => {
  try {
    const newBookSubject = await BookSubject.create(req.body);
    return res.status(200).json({ newBookSubject });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getAllBookSubjects = async (req, res) => {
  try {
    const allBookSubjects = await BookSubject.findAll();
    return res.status(200).json({ allBookSubjects });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};


module.exports = {
  createBookSubject,
  getAllBookSubjects,
};
