const Subject = require("../models/subjects");

const createSubject = async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body);
    return res.status(200).json({ newSubject });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getAllSubjects = async (req, res) => {
  try {
    const allSubjects = await Subject.findAll();
    return res.status(200).json({ allSubjects });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};


module.exports = {
  createSubject,
  getAllSubjects,
};
