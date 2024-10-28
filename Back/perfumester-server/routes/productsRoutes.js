const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "uploads/products");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/", productsController.getAllProducts);
router.get("/men", productsController.getMenProducts);
router.get("/women", productsController.getWomenProducts);
router.post(
  "/create",
  upload.single("image"),
  productsController.createProduct
);
router.delete("/delete/:id", productsController.deleteProduct);
router.patch(
  "/update/:id",
  upload.single("image"),
  productsController.updateProduct
);

module.exports = router;
