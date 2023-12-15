const express = require("express");
const {
  createBorrowing,
  getAllBorrowings,
  updateBorrowing,
  getAllStudentBorrowings,
  getExpiredBorrowings,
} = require("../controllers/borrowingController");

const router = express.Router();

// Resource-related routes
router.route("/").post(createBorrowing).get(getAllBorrowings);
router.route("/:id").put(updateBorrowing);
router.route("/borrowed").get(getAllStudentBorrowings);
router.route("/expired").get(getExpiredBorrowings);

module.exports = router;