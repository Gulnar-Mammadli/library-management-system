const express = require("express");
const {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
  changePassword,
} = require("../controllers/studentController");

const router = express.Router();

router.route("/").post(createStudent).get(getAllStudents);
router.route("/").put(updateStudent);
router.route("/password").put(changePassword);
router.route("/").delete(deleteStudent);

module.exports = router;
