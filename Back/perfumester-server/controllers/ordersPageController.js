const database = require("../models/db");
const path = require("path");
const fs = require("fs");

const ORDER_PAGE_TABLE = "orders";
const PRODUCT_TABLE = "products";
const getOrders = (req, res) => {
  const query = `
    SELECT orders.*, products.name, products.image 
    FROM ${ORDER_PAGE_TABLE} AS orders
    INNER JOIN ${PRODUCT_TABLE} AS products
    ON orders.product_id = products.id;
  `;
  const response = database.db.query(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ data: rows });
    }
  });
};

const addOrder = (req, res) => {
  const { location, date, quantity, person, amount, status, product_id } =
    req.body;
  if (!location) {
    return res.status(400).json({ error: "Location is Missing" });
  }
  if (!date) {
    return res.status(400).json({ error: "Date is Missing" });
  }
  if (!quantity) {
    return res.status(400).json({ error: "Quantity is Missing" });
  }
  if (!amount) {
    return res.status(400).json({ error: "Amount is Missing" });
  }
  if (!status) {
    return res.status(400).json({ error: "Status is Missing" });
  }
  if (!person) {
    return res.status(400).json({ error: "Person is Missing" });
  }
  if (!product_id) {
    return res.status(400).json({ error: "Product ID is Missing" });
  }

  const response = database.db.query(
    `
    INSERT INTO ${ORDER_PAGE_TABLE} (location, date, quantity, amount, status,person, product_id) 
    VALUES (?,?,?,?,?,?);
    `,
    [location, date, quantity, amount, status, person, product_id],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({
          data: result.affectedRows,
        });
      }
    }
  );
};

const deleteOrder = (req, res) => {
  const { id } = req.params;

  database.db.query(
    `SELECT content FROM ${NEW_PAGE_TABLE} WHERE id = ?`,
    [id],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: "Database query error" });
      }
      if (rows.length == 0) {
        return res.status(404).json({ error: "PRODUCT NOT FOUND" });
      }

      const imagePath = rows[0].content;
      const fullImagePath = path.join(__dirname, "..", imagePath);

      if (fs.existsSync(fullImagePath)) {
        fs.unlink(fullImagePath, (unLinkErr) => {
          if (unLinkErr) {
            console.log("ERROR DELETING IMAGE __", unLinkErr);
          }
        });
      }

      database.db.query(
        `DELETE FROM ${NEW_PAGE_TABLE} WHERE id = ?`,
        [id],
        (err, result) => {
          if (err) {
            return res.status(500).json({ error: err });
          }
          res.status(200).json({ message: "Image Deleted Successfully" });
        }
      );
    }
  );
};

const updateOrder = (req, res) => {
  const { id } = req.params;

  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ error: "Status is Missing" });
  }

  const response = database.db.query(
    `UPDATE ${ORDER_PAGE_TABLE} SET status = ? WHERE id = ?`,
    [status, id],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      } else {
        return res.status(200).json({
          data: {
            id,
            status,
          },
        });
      }
    }
  );
};

module.exports = {
  getOrders,
  addOrder,
  deleteOrder,
  updateOrder,
};
