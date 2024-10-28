//Database Connection
const mysql2 = require("mysql2");
const dbConnection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "perfumster",
});

dbConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

const createTable = `
CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  location VARCHAR(255) NOT NULL, 
  date DATE NOT NULL,
  quantity INT NOT NULL,
  amount INT NOT NULL,
  status VARCHAR(255) NOT NULL,
  product_id INT NOT NULL,
  foreign key (product_id) references products(id)
);
`;

// dbConnection.query(createTable, (err, result) => {
//   if (err) {
//     console.log("Error creating subscriptions table", err);
//   } else {
//     console.log("Subscriptions table created successfully");
//   }
// });

module.exports = { db: dbConnection };
