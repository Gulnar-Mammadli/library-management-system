const express = require("express");
const { createUser, login } = require("../controllers/userController");

const router = express.Router();

router.route("/login").post(login);

module.exports = router;
