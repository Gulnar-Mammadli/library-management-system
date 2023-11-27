const express = require("express");
const {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

router.route("/").post(createStudent).get(getAllStudents);
router.route("/").put(updateStudent);
router.route("/").delete(updateStudent);

module.exports = router;
