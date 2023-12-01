const express = require("express");
const {
  createCopy,
  getAllCopies,
} = require("../controllers/copyController");

const router = express.Router();

router.route("/").post(createCopy).get(getAllCopies);

module.exports = router;
