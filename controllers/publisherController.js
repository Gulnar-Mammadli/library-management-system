const Publisher = require("../models/publishers");

const createPublisher = async (req, res) => {
  try {
    const newPublisher = await Publisher.create(req.body);
    res.status(200).json({ newPublisher });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllPublishers = async (req, res) => {
  try {
    const allPublishers = await Publisher.findAll();
    res.status(200).json({ allPublishers });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};


module.exports = {
  createPublisher,
  getAllPublishers,
};
