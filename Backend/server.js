import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();
const PORT = 5175;


// Middleware Setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Get the current file path for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Define a static folder for file storage
// const FILES_DIR = path.join(__dirname, "uploads");

// Database Configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_lres",
  port: 3307,
});

// Database Connection Check
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL database");
});

// Fetch all license applications
app.get("/licensing", (req, res) => {
  const query = "SELECT * FROM licenseapp_tbl";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ error: "Database query error" });
    }

    res.json(results);
  });
});

// SERVICES fetching
app.get("/LresServices", (req, res) => {
  const q = "SELECT * FROM services_tbl";

  db.query(q, (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ error: "Database query error" });
    }

    res.status(200).json(results);
  });
});

// ACHIEVEMENTS SECTION

app.get("/Achievements", (req, res) => {
  const q = "SELECT * FROM achievement_tbl";

  db.query(q, (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ error: "Database query error" });
    }

    res.status(200).json(results.length > 0 ? results : []);
  });
});


// FEEDBACK
app.post("/Contacts", (req, res) => {
  const { name, email, message } = req.body;

  if (!message) {
    return res.status(400).json({ message: "Message is required" });
  }

  const sql = "INSERT INTO feedback_tbl (name, email, message) VALUES (?, ?, ?)";
  const values = [name || null, email || null, message];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Database Error: ", err);
      return res.status(500).json({ message: "Database error", error: err.sqlMessage || err });
    }
    res.status(200).json({ message: "Feedback submitted successfully" });
  });
});
// Server Listener
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
