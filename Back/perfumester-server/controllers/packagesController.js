const database = require("../models/db");

const PACKAGES_PAGE_TABLE = "packages";

const getAllPackages = (req, res) => {
  const response = database.db.query(
    `SELECT * FROM ${PACKAGES_PAGE_TABLE} `,
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(200).json({ data: rows });
      }
    }
  );
};

const editPackage = (req, res) => {
  const { id } = req.params;

  const { package_name, description, package_type, scents_number, price } =
    req.body;

  if (!package_name) {
    return res.status(400).json({ error: "Package name required fields" });
  }
  if (!description) {
    return res.status(400).json({ error: "Description required fields" });
  }
  if (!package_type) {
    return res.status(400).json({ error: "Package type required fields" });
  }
  if (!scents_number) {
    return res.status(400).json({ error: "Scents number required fields" });
  }
  if (!price) {
    return res.status(400).json({ error: "Price required fields" });
  }

  if (!id) {
    return res.status(400).json({ error: "ID required fields" });
  }
  const updatePackage = database.db.query(
    `UPDATE ${PACKAGES_PAGE_TABLE} SET package_name = ?, description = ?, package_type = ? ,scents_number = ? ,price = ?  WHERE id = ?`,
    [package_name, description, package_type, scents_number, price, id],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      } else {
        const message = "Package updated successfully!";
        return res.status(200).json({
          data: {
            id,
            package_name,
            description,
            package_type,
            price,
            scents_number,
          },
        });
      }
    }
  );
};

const editPackageActivity = (req, res) => {
  const { id, status } = req.body;

  // Check for missing required fields
  if (!id || !status) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Find the package by ID
  database.db.query(
    "SELECT * FROM packages WHERE id = ?",
    [id],
    (error, rows) => {
      if (error) {
        // Handle SQL error
        return res.status(500).json({ error: error.message });
      } else if (rows.length === 0) {
        // Handle case when package is not found
        return res.status(404).json({ error: "Package not found" });
      } else {
        // If package is found, proceed to update it
        database.db.query(
          "UPDATE packages SET status = ? WHERE id = ?",
          [status, id],
          (err) => {
            if (err) {
              // Handle update error
              return res.status(500).json({ error: err.message });
            } else {
              // If successful, send the updated status
              const message = "Package status updated successfully!";
              return res.status(200).json({
                data: { id, status, message },
              });
            }
          }
        );
      }
    }
  );
};

module.exports = {
  getAllPackages,
  editPackageActivity,
  editPackage,
};
