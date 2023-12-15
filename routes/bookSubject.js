const express = require("express");
const {
  createBookSubject,
  getAllBookSubjects,
} = require("../controllers/bookSubjectController");

const router = express.Router();

router.route("/").post(createBookSubject).get(getAllBookSubjects);

module.exports = router;
