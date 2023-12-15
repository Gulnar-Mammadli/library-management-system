const Copy = require("../models/copies");
const { v4: uuidv4 } = require("uuid");

const createCopy = async (req, res) => {
  try {
    const data = {
      barcode: uuidv4(),
      purchaseDate: req.body.purchaseDate,
      rackNumber: req.body.rackNumber,
      bookId: req.body.bookId,
      price: req.body.price,
    };

    const newCopy = await Copy.create(data);
    return res.status(200).json({ newCopy });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getAllCopies = async (req, res) => {
  try {
    const allCopies = await Copy.findAll();
    return res.status(200).json({ allCopies });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  createCopy,
  getAllCopies,
};
