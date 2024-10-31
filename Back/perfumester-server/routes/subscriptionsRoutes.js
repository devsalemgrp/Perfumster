const express = require("express");
const router = express.Router();
const subscriptionsController = require("../controllers/subscriptionsController");

router.get("/", subscriptionsController.getAllSubscriptions);
router.get("/user/", subscriptionsController.getUserSubscription);
router.post("/create", subscriptionsController.createSubscription);
router.patch(
  "/update-status",
  subscriptionsController.editSubscriptionActivity
);

module.exports = router;
