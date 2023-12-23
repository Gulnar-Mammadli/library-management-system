const express = require("express");
const {
  createUserPermission,
  getAllUserPermissions,
} = require("../controllers/userPermissionController");

const router = express.Router();

router.route("/").post(createUserPermission).get(getAllUserPermissions);

module.exports = router;
