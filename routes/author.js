const express = require("express");
const {
  createAuthor,
  getAllAuthors,
} = require("../controllers/authorController");

const router = express.Router();

router.route("/").post(createAuthor).get(getAllAuthors);

module.exports = router;
