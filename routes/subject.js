const express = require("express");
const {
  createSubject,
  getAllSubjects,
} = require("../controllers/subjectController");

const router = express.Router();

router.route("/").post(createSubject).get(getAllSubjects);

module.exports = router;
