const express = require("express");
const {
  createBook,
  getAllBooks,
} = require("../controllers/bookController");

const router = express.Router();

router.route("/").post(createBook).get(getAllBooks);
module.exports = router;
