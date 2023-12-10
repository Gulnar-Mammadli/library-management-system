const express = require("express");
const {
  createBorrowing,
  getAllBorrowings,
  getAllStudentBorrowings,
  getExpiredBorrowings,
} = require("../controllers/borrowingController");

const router = express.Router();

router.route("/").post(createBorrowing).get(getAllBorrowings);
router.route("/borrowed").get(getAllStudentBorrowings);
router.route("/expired").get(getExpiredBorrowings);

module.exports = router;
