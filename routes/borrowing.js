const express = require("express");
const {
  createBorrowing,
  getAllBorrowings,
} = require("../controllers/borrowingController");

const router = express.Router();

router.route("/").post(createBorrowing).get(getAllBorrowings);

module.exports = router;
