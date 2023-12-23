const express = require("express");
const {
  createPermission,
  getAllPermissions,
} = require("../controllers/permissionController");

const router = express.Router();

router.route("/").post(createPermission).get(getAllPermissions);

module.exports = router;
