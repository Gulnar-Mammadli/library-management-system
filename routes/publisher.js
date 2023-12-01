const express = require("express");
const {
  createPublisher,
  getAllPublishers,
} = require("../controllers/publisherController");

const router = express.Router();

router.route("/").post(createPublisher).get(getAllPublishers);

module.exports = router;
