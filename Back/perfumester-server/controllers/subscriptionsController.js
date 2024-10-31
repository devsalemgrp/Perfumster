const database = require("../models/db");
const SUBSCRIPTIONS_PAGE_TABLE = "subscriptions";
const jwt = require("jsonwebtoken");

const getAllSubscriptions = (req, res) => {
  const subscriptions = database.db.query(
    `SELECT * FROM subscriptions s 
      JOIN users u ON u.id = s.user_id
      JOIN packages p ON p.id = s.package_id
      JOIN subscriptions_products sp ON s.id = sp.subscription_id
      JOIN products pr ON sp.product_id = pr.id
    `,
    (err, rows) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Internal Server Error", message: err.message });
      } else {
        return res.status(200).json({ data: rows });
      }
    }
  );
};
const getUserSubscription = (req, res) => {
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

    database.db.query(
      `
      SELECT 
        s.id AS subscription_id,
        s.user_id,
        u.id AS user_id,
        u.name AS user_name,
        u.email AS user_email,
        u.phone_number AS user_phone_number,
        u.country AS user_country,
        u.profession AS user_profession,
        u.date_of_birth AS user_date_of_birth,
        p.id AS package_id,
        p.package_name AS package_name,
        p.price AS package_price,
        p.description AS package_description,
        pr.id AS product_id,
        pr.name AS product_name,
        pr.price AS product_price,
        pr.description AS product_description,
        pr.status AS product_status,
        pr.subscriptionCategory AS product_subscription_category,
        pr.category AS product_category
      FROM subscriptions s 
      JOIN users u ON u.id = s.user_id
      JOIN packages p ON p.id = s.package_id
      JOIN subscriptions_products sp ON s.id = sp.subscription_id
      JOIN products pr ON sp.product_id = pr.id
      WHERE s.user_id = ?
      `,
      [userId],
      (err, rows) => {
        if (err) {
          return res
            .status(500)
            .json({ error: "Internal Server Error", message: err.message });
        }

        // Initialize the single subscription object
        let userSubscription = null;

        rows.forEach((row) => {
          if (!userSubscription) {
            userSubscription = {
              id: row.subscription_id,
              user_id: row.user_id,
              user: {
                id: row.user_id,
                name: row.user_name,
                email: row.user_email,
                phone_number: row.user_phone_number,
                country: row.user_country,
                profession: row.user_profession,
                date_of_birth: row.user_date_of_birth,
              },
              package: {
                id: row.package_id,
                name: row.package_name,
                price: row.package_price,
                description: row.package_description,
              },
              products: [],
            };
          }

          // Add each product to the products array
          userSubscription.products.push({
            id: row.product_id,
            name: row.product_name,
            price: row.product_price,
            description: row.product_description,
            status: row.product_status,
            subscriptionCategory: row.product_subscription_category,
            category: row.product_category,
          });
        });

        // Send the structured response as a single object
        return res.json(userSubscription);
      }
    );
  });

  // Proceed only if the userId is successfully decoded
};

const createSubscription = async (req, res) => {
  const { userId, packageId, productIds } = req.body;
  if (!userId) {
    return res.status(404).json({ error: "Invalid user id" });
  }
  if (!packageId) {
    return res.status(404).json({ error: "Invalid package id" });
  }
  if (!productIds) {
    return res.status(404).json({ error: "Invalid product id" });
  }

  database.db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    connection.beginTransaction((err) => {
      if (err) {
        connection.release();
        return res.status(400).json({ error: err.message });
      }

      connection.query(
        `INSERT INTO subscriptions (user_id, package_id) VALUES (?, ?)`,
        [userId, packageId],
        (err, result) => {
          // Changed 'res' to 'result'
          if (err) {
            return connection.rollback(() => {
              connection.release();
              return res.status(500).json({ error: err.message });
            });
          }
          const subscriptionId = result.insertId; // Use 'result' instead of 'res'
          const values = productIds.map((id) => [subscriptionId, id]);
          connection.query(
            `INSERT INTO subscriptions_products (subscription_id, product_id) VALUES ?`,
            [values],
            (err) => {
              // No need to redefine 'res' here
              if (err) {
                return connection.rollback(() => {
                  connection.release();
                  return res.status(500).json({ error: err.message });
                });
              }
              connection.commit((err) => {
                if (err) {
                  return connection.rollback(() => {
                    connection.release();
                    return res.status(500).json({ error: err.message });
                  });
                }
                connection.release();
                return res
                  .status(201)
                  .json({ message: "Subscription created successfully!" });
              });
            }
          );
        }
      );
    });
  });
};

const editSubscriptionActivity = (req, res) => {
  const { id, status } = req.body;
  if (!id || !status) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const findSubscription = database.db.query(
    "SELECT * FROM subscriptions WHERE id= ?",
    [id],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      } else if (rows.length === 0) {
        return res.status(404).json({ error: "Subscription not found" });
      } else {
        const updateSubscription = database.db.query(
          "UPDATE subscriptions SET status = ? WHERE id = ?",
          [status, id],
          (err) => {
            if (err) {
              return res.status(500).json({ error: err.message });
            } else {
              const message = "Subscription updated successfully!";
              return res.status(200).json({ data: { id, status, message } });
            }
          }
        );
      }
    }
  );
};

module.exports = {
  getAllSubscriptions,
  createSubscription,
  getUserSubscription,
  editSubscriptionActivity,
};
