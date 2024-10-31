const database = require("../models/db");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const USER_TABLE = "users";
const IMAGE_PATH = "uploads/users/";

const getAllUsers = (req, res) => {
  const response = database.db.query(
    `SELECT * FROM ${USER_TABLE}`,
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(200).json({ data: rows });
      }
    }
  );
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }

  const user = database.db.query(
    `
    SELECT * FROM ${USER_TABLE} WHERE email = ? 
    `,
    [email],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        console.log(result);
        if (result.length == 0) {
          return res.status(404).json({ error: "User not found" });
        }
        if (bcrypt.compareSync(password, result[0]?.password)) {
          const token = jwt.sign(
            { id: result[0].id, email: result[0].email },
            "SECRET_KEY",
            { expiresIn: "1h" }
          );
          return res.status(200).json({
            message: "Login successful",
            token: token,
            username: result[0].name,
            email: result[0].email,
          });
        } else {
          return res.status(400).json({ error: "Invalid credentials" });
        }
      }
    }
  );
};

const signIn = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }
  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = database.db.query(
    ` SELECT * FROM ${USER_TABLE} WHERE name = ? AND email = ?`,
    [username, email],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        if (result.length > 0) {
          return res.status(409).json({ error: "Email already exists" });
        }
        database.db.query(
          `INSERT INTO ${USER_TABLE} (name,email,password) VALUES (?,?,?)`,
          [username, email, hashedPassword],
          (err, result) => {
            if (err) {
              res.status(500).json({ error: err.message });
            } else {
              res.status(201).json({ message: "User created successfully" });
            }
          }
        );
      }
    }
  );
};

const getUserById = (req, res) => {
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
    database.db.query(
      `SELECT * FROM ${USER_TABLE} WHERE id = ?`,
      [userId],
      (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
          return res.status(404).json({ error: "User not found" });
        } else {
          return res.status(200).json({ data: results });
        }
      }
    );
  });
};

const editUserInfo = (req, res) => {
  const { dateOfBirth, phoneNumber, country, profession } = req.body;
  const { id } = req.params;
  if (!dateOfBirth) {
    return res.status(400).json({ error: "Date of Birth is required" });
  }
  if (!phoneNumber) {
    return res.status(400).json({ error: "Phone Number is required" });
  }
  if (!country) {
    return res.status(400).json({ error: "Country is required" });
  }
  if (!profession) {
    return res.status(400).json({ error: "Profession is required" });
  }

  const imagePath = req.file ? `${IMAGE_PATH + req.file.filename}` : null;

  const response = database.db.query(
    `UPDATE ${USER_TABLE} SET date_of_birth = ?, phone_number = ?, country = ?, profession = ? , image = ? WHERE id = ?`,
    [dateOfBirth, phoneNumber, country, profession, imagePath, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      } else {
        return res
          .status(200)
          .json({ message: "User information updated successfully" });
      }
    }
  );
};
module.exports = {
  getAllUsers,
  editUserInfo,
  login,
  getUserByEmail: getUserById,
  signIn,
};
