const express = require("express");
const { createCode, getAllCodes } = require("../controllers/codeController");

const router = express.Router();

router.route("/").post(createCode).get(getAllCodes);

module.exports = router;
