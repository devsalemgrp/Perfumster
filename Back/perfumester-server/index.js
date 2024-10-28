const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const _PORT = 3001;
const db = require("./models/db");
const packagesRoutes = require("./routes/packagesRoutes");
const subscriptionsRoutes = require("./routes/subscriptionsRoutes");
const productsRoutes = require("./routes/productsRoutes");
const homePageRoutes = require("./routes/homePageRoutes");
const mensPageRoutes = require("./routes/menPageRoutes");
const womensPageRoutes = require("./routes/womenPageRoutes");
const newPageRoutes = require("./routes/newPageRoutes");
const ordersRoutes = require("./routes/ordersPageRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line for form-data

app.use("/uploads", express.static("uploads"));

app.use("/api/packages", packagesRoutes);
app.use("/api/subscriptions", subscriptionsRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/home", homePageRoutes);
app.use("/api/men", mensPageRoutes);
app.use("/api/women", womensPageRoutes);
app.use("/api/new", newPageRoutes);
app.use("/api/orders", ordersRoutes);

app.listen(_PORT, () => {
  console.log("listening on port...");
});
