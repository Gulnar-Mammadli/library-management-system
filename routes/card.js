const express = require("express");
const {
  createCard,
  activateCard,
  deactivateCard,
} = require("../controllers/cardController");

const router = express.Router();

router.route("/").post(createCard);
router.route("/activate").put(activateCard);
router.route("/deactivate").put(deactivateCard);

module.exports = router;
