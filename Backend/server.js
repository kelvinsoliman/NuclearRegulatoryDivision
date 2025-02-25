import express from "express";
import mysql from "mysql";
import cors from "cors";
const PORT = 5175;
const app = express(); 

// Middleware Setup

app.use(cors());
app.use(express.json());


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


app.post('/licensing', (req, res) => {
  const { application_name, url } = req.body;
  // Validate the request body
  if (!application_name || !url) {
    return res.status(400).json({ error: "application_name and url are required" });
  }
  const q = "INSERT INTO licenseapp_tbl (`application_name`, `url`) VALUES (?, ?)";
  const values = [application_name, url];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
    return res.status(201).json({ message: "Uploaded", result: data });
  });
}); 

// Server Listener
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
