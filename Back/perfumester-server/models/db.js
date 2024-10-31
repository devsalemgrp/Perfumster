require("dotenv").config();

console.log("Connecting to database", process.env.REACT_APP_DATABASE_URL);
const mysql2 = require("mysql2");
const dbConnection = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: process.env.REACT_APP_DATABASE_URL,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// const createTable = `
//   CREATE TABLE order_products (
//   order_id INT,
//   product_id INT,
//   quantity INT,
//   FOREIGN KEY (order_id) REFERENCES orders(id),
//   FOREIGN KEY (product_id) REFERENCES products(id)
// );
// `;

// dbConnection.query(createTable, (err, result) => {
//   if (err) {
//     console.log("Error creating subscriptions table", err);
//   } else {
//     console.log("Subscriptions table created successfully");
//   }
// });

module.exports = { db: dbConnection };
