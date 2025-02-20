import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const PORT = 5175;

// Middleware Setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


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


// Helper Function for Queries
const executeQuery = (query, params, res) => {
  db.query(query, params, (err, data) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ error: "Database query error" });
    }
    return res.status(200).json(data);
  });
};

// Fetch Routes
app.get("/Licensing", (req, res) => executeQuery("SELECT * FROM licenseapp_tbl", [], res));
app.get("/LresServices", (req, res) => executeQuery("SELECT * FROM services_tbl", [], res));
app.get("/LresStaffs", (req, res) => executeQuery("SELECT * FROM employee_tbl", [], res));

// Post Route for Feedback
app.post("/lres", (req, res) => {
  console.log("Received request body:", req.body); 

  const { name, email, message } = req.body;

  // Validate input
  if (!message) {
    console.error("Validation failed: Missing fields");
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = "INSERT INTO feedback_tbl (name, email, message) VALUES (?, ?, ?)";
  const params = [name, email, message];


  db.query(query, params, (err, result) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ error: "Database query error" });
    }
    console.log("Feedback inserted successfully:", result);
    return res.status(201).json({ message: "Feedback submitted successfully" });
  });
});







// Mock database (replace with a real database like MongoDB or MySQL)
let ratings = [];

// Endpoint to handle rating submission
app.post("/StarRating", (req, res) => {
  const { rating } = req.body;

  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Invalid rating value." });
  }

  // Save the rating to the database (mock implementation)
  ratings.push({ rating, timestamp: new Date() });
  res.status(200).json({ message: "Rating saved successfully!" });
});

// Start the server

// Server Listener
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
