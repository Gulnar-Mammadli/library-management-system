const express = require("express");
const {
  createEmployee,
  getEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

router.route("/").post(createEmployee).get(getEmployee);

module.exports = router;