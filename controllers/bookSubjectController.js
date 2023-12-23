const BookSubject = require("../models/bookSubject");

const createBookSubject = async (req, res) => {
  try {
    const existingRecord = await BookSubject.findOne({
      where: {
        bookId: req.body.bookId,
        subjectId: req.body.subjectId,
      },
    });

    if (existingRecord) {
      return res.status(400).json({ msg: 'Duplicate entry for bookId and subjectId' });
    }

    const newBookSubject = await BookSubject.create(req.body);
    return res.status(200).json({ newBookSubject });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getAllBookSubjects = async (req, res) => {
  try {
    const allBookSubjects = await BookSubject.findAll();
    return res.status(200).json({ allBookSubjects });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createBookSubject,
  getAllBookSubjects,
};
