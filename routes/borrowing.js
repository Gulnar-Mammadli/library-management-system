const express = require("express");
const {
  createBorrowing,
  getAllBorrowings,
  updateBorrowing,
  getAllStudentBorrowings,
  getExpiredBorrowings,
} = require("../controllers/borrowingController");

const { checkPermission } = require("../midleware/auth");

const router = express.Router();

// router.use(checkPermission);

// Resource-related routes
router.route("/").post(createBorrowing).get(getAllBorrowings);
router.route("/").put(updateBorrowing);
router.route("/borrowed").get(getAllStudentBorrowings);
router.route("/expired").get(getExpiredBorrowings);

module.exports = router;
