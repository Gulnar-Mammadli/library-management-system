const Subject = require("../models/subjects");

const createSubject = async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body);
    res.status(200).json({ newSubject });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllSubjects = async (req, res) => {
  try {
    const allSubjects = await Subject.findAll();
    res.status(200).json({ allSubjects });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};


module.exports = {
  createSubject,
  getAllSubjects,
};
