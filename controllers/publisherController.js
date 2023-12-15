const Publisher = require("../models/publishers");

const createPublisher = async (req, res) => {
  try {
    const newPublisher = await Publisher.create(req.body);
    return res.status(200).json({ newPublisher });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getAllPublishers = async (req, res) => {
  try {
    const allPublishers = await Publisher.findAll();
    return res.status(200).json({ allPublishers });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};


module.exports = {
  createPublisher,
  getAllPublishers,
};
