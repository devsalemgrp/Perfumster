const express = require("express");
const router = express.Router();
const packagesController = require("../controllers/packagesController");

router.get("/", packagesController.getAllPackages);
router.patch("/update/:id", packagesController.editPackage);
router.patch("/update-status", packagesController.editPackageActivity);

module.exports = router;
