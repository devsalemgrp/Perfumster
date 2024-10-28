const express = require("express");
const router = express.Router();
const orderPageController = require("../controllers/ordersPageController");

router.get("/", orderPageController.getOrders);
router.post(`/create`, orderPageController.addOrder);
router.patch(`/update/:id`, orderPageController.updateOrder);
router.delete(`/delete/:id`, orderPageController.deleteOrder);

module.exports = router;
