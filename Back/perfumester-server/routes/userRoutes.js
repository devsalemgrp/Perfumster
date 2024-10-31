const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const userController = require("../controllers/userController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/users");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/", userController.getAllUsers);
router.post("/login", userController.login);
router.post("/signIn", userController.signIn);
router.patch(
  "/update/:id",
  upload.single("image"),
  userController.editUserInfo
);
router.get("/user", userController.getUserByEmail);
module.exports = router;
