const express = require("express");
const {
  createBookAuthor,
  getAllBookAuthors,
} = require("../controllers/bookAuthorController");

const router = express.Router();

router.route("/").post(createBookAuthor).get(getAllBookAuthors);

module.exports = router;
