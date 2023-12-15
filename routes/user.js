const express = require("express");
const { createUser, login } = require("../controllers/userController");

const router = express.Router();

router.route("/login").post(login);
router.route("/").post(createUser);

module.exports = router;