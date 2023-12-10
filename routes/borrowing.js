const express = require("express");
const {
  createBorrowing,
  getAllBorrowings,
  getAllStudentBorrowings,
} = require("../controllers/borrowingController");

const router = express.Router();

router.route("/").post(createBorrowing).get(getAllBorrowings);
router.route("/borrowed").get(getAllStudentBorrowings);

module.exports = router;
