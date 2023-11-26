const express = require("express");
const {
  createStudent,
  getAllStudents,
} = require("../controllers/studentController");

const router = express.Router();

router.route("/").post(createStudent).get(getAllStudents);

module.exports = router;
