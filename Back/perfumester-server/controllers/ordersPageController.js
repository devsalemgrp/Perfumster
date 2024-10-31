const database = require("../models/db");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const ORDER_PAGE_TABLE = "orders_test";
const ORDER_PRODUCTS_TABLE = "order_products";
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
  const { userId, location, date, quantity, person, amount, product_ids } =
    req.body;

  // Input validation
  if (!location || !date || !quantity || !amount || !product_ids) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  database.db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    connection.beginTransaction((err) => {
      if (err) {
        connection.release();
        return res.status(500).json({ error: err.message });
      }

      const insertOrderQuery = `
        INSERT INTO ${ORDER_PAGE_TABLE} (user_id, location, date, quantity, amount)
        VALUES (?, ?, ?, ?, ?);
      `;

      connection.query(
        insertOrderQuery,
        [userId, location, date, quantity, amount],
        (err, result) => {
          if (err) {
            connection.rollback(() => {
              connection.release();
              return res.status(500).json({ error: err.message });
            });
          }

          const orderId = result?.insertId; // This should now be defined if the insert was successful

          const insertOrderProductsQuery = `
            INSERT INTO ${ORDER_PRODUCTS_TABLE} (order_id, product_id , quantity)
            VALUES ?;
          `;

          const values = product_ids.map((product) => [
            orderId,
            product.productId,
            product.quantity,
          ]);
          console.log(values);
          connection.query(
            insertOrderProductsQuery,
            [values], // Passing the array of values directly
            (err) => {
              if (err) {
                connection.rollback(() => {
                  connection.release();
                  return res.status(500).json({ error: err.message });
                });
                return;
              }

              connection.commit((err) => {
                if (err) {
                  connection.rollback(() => {
                    connection.release();
                    return res.status(500).json({ error: err.message });
                  });
                }

                connection.release();
                return res.status(201).json({
                  data: {
                    orderId,
                    location,
                    date,
                    quantity,
                    amount,
                    product_ids,
                  },
                });
              });
            }
          );
        }
      );
    });
  });
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

const getUserOrders = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "Access token required" });
  }

  let userId;

  jwt.verify(token, "SECRET_KEY", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    userId = decoded.id;
    if (!userId) {
      return res.status(400).json({ error: "User ID not found in token" });
    }
    const query = `
    SELECT 
      o.id AS order_id,
      o.location,
      o.date,
      o.quantity AS order_quantity,
      o.amount,
      products.id AS product_id,
      products.name AS product_name,
      products.image AS product_image,
      order_products.quantity AS product_quantity_ordered
    FROM ${ORDER_PAGE_TABLE} AS  o
    INNER JOIN order_products  ON o.id = order_products.order_id
    INNER JOIN ${PRODUCT_TABLE}  ON order_products.product_id = products.id
    WHERE o.user_id = ?;
  `;

    database.db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      connection.query(query, [userId], (err, results) => {
        connection.release();

        if (err) {
          return res.status(500).json({ error: err.message });
        }

        const orders = results.reduce((acc, row) => {
          const order = acc.find((order) => order.order_id === row.order_id);

          if (order) {
            order.products.push({
              product_id: row.product_id,
              product_name: row.product_name,
              product_image: row.product_image,
              quantity_ordered: row.product_quantity_ordered,
            });
          } else {
            // If it's a new order, create a new entry
            acc.push({
              order_id: row.order_id,
              location: row.location,
              date: row.date,
              order_quantity: row.order_quantity,
              amount: row.amount,
              status: row.status,
              person: row.person,
              products: [
                {
                  product_id: row.product_id,
                  product_name: row.product_name,
                  product_image: row.product_image,
                  quantity_ordered: row.product_quantity_ordered,
                },
              ],
            });
          }

          return acc;
        }, []);

        res.status(200).json({ orders });
      });
    });
  });
};

module.exports = {
  getOrders,
  addOrder,
  deleteOrder,
  updateOrder,
  getUserOrders,
};
