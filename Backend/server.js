import express from "express";
import mysql from "mysql";
import cors from "cors";
// const nodemailer = require('nodemailer');
import nodemailer from "nodemailer";
const app = express();

// Middleware Setup

app.use(cors());
app.use(express.json());

// Database Configuration
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "db_lres",
  port: process.env.DB_PORT || 3307,
});

// Database Connection Check
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL database");
});

const pool = mysql.createPool(db);

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

// Admin AdminServices Fetch

app.post("/AdminServices", (req, res) => {
  const { service_name, service_desc, requirements, details } = req.body;

  // Validate required fields
  if (!service_name || !service_desc || !requirements || !details) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = `
    INSERT INTO services_tbl (service_name, service_desc, requirements, details)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    query,
    [service_name, service_desc, requirements, details],
    (err, results) => {
      if (err) {
        console.error("Database query error:", err);
        return res.status(500).json({ error: "Database query error" });
      }

      // Return the newly created entry
      res.status(201).json({
        id: results.insertId, // The auto-incremented ID of the new entry
        service_name,
        service_desc,
        requirements,
        details,
      });
    }
  );
});

//Contacts

app.post("/Contacts", (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  // Optional email validation if email is provided
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res
      .status(400)
      .json({ error: "Please provide a valid email address" });
  }

  const sql =
    "INSERT INTO contacts_tbl (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Failed to save contact message" });
    }

    res.status(201).json({
      success: true,
      message: "Thank you for your feedback!",
      data: {
        id: result.insertId,
        name,
        email,
        message,
      },
    });
  });
});

// LRES STATISTICS

app.get("/lres", (req, res) => {
  const sql = `
    SELECT 
      YEAR(date_time) AS year, 
      category, 
      COUNT(*) AS count 
    FROM lresstatistics_tbl
    GROUP BY YEAR(date_time), category
    ORDER BY year DESC, category;
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Database query failed" });
    }

    // Create a map to organize data by year
    const yearMap = new Map();
    
    results.forEach(row => {
      const year = row.year;
      const category = row.category.toLowerCase();
      const count = row.count;
      
      if (!yearMap.has(year)) {
        yearMap.set(year, {
          year: year,
          medical: 0,
          industrial: 0,
          commercial: 0,
          total: 0
        });
      }
      
      const yearData = yearMap.get(year);
      
      switch(category) {
        case 'medical':
          yearData.medical = count;
          break;
        case 'industrial':
          yearData.industrial = count;
          break;
        case 'commercial':
          yearData.commercial = count;
          break;
      }
      
      // Update total
      yearData.total = yearData.medical + yearData.industrial + yearData.commercial;
    });

    // Convert map to array
    const stats = Array.from(yearMap.values()).sort((a, b) => b.year - a.year);
    
    res.json(stats);
  });
});
// SERVICES fetching

app.get("/lres", (req, res) => {
  const sql = `
    SELECT 
      year,
      COUNT(*) as total,
      SUM(CASE WHEN category = 'medical' THEN 1 ELSE 0 END) as medical,
      SUM(CASE WHEN category = 'industrial' THEN 1 ELSE 0 END) as industrial,
      SUM(CASE WHEN category = 'commercial' THEN 1 ELSE 0 END) as commercial
    FROM lresstatistics_tbl
    GROUP BY year
    ORDER BY year DESC;
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});





// FEEDBACK
app.post("/Contacts", (req, res) => {
  const { name, email, message } = req.body;

  if (!message) {
    return res.status(400).json({ message: "Message is required" });
  }
  const sql =
    "INSERT INTO feedback_tbl (name, email, message) VALUES (?, ?, ?)";
  const values = [name || null, email || null, message];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Database Error: ", err);
      return res
        .status(500)
        .json({ message: "Database error", error: err.sqlMessage || err });
    }
    res.status(200).json({ message: "Feedback submitted successfully" });
  });
});

//Regulations
app.get("/Regulations", (req, res) => {
  console.log("Fetching regulations...");

  const q = "SELECT * FROM regulations_tbl";

  db.query(q, (err, results) => {
    if (err) {
      console.error("Database query error:", err.message);
      return res
        .status(500)
        .json({ error: "Failed to fetch regulations", details: err.message });
    }

    if (!results.length) {
      return res.status(404).json({ message: "No regulations found" });
    }

    console.log("Query successful, sending results...");
    res.status(200).json(results);
  });
});

// regulatory guidelines

app.get("/Guidelines", (req, res) => {
  console.log("Fetching Guidelines...");

  const q = "SELECT * FROM guidelines_tbl ORDER BY id DESC;";

  db.query(q, (err, results) => {
    if (err) {
      console.error("Database query error:", err.message);
      return res
        .status(500)
        .json({ error: "Failed to fetch regulations", details: err.message });
    }

    if (!results.length) {
      return res.status(404).json({ message: "No regulations found" });
    }

    console.log("Query successful, sending results...");
    res.status(200).json(results);
  });
});

// Fetch all events
app.get("/Activities", (req, res) => {
  db.query("SELECT * FROM events", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Add a new event
app.post("/Activities", (req, res) => {
  const { title, start, end, description } = req.body;
  const sql =
    "INSERT INTO events (title, start, end, description) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, start, end, description], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res
        .status(201)
        .json({ id: result.insertId, title, start, end, description });
    }
  });
});

// RSDS INFORMATION NOTICES
app.get("/RSDSInformation", (req, res) => {
  console.log("Fetching Infomations...");

  const q = "SELECT * FROM rsdsinformation_tbl ORDER BY id DESC;";

  db.query(q, (err, results) => {
    if (err) {
      console.error("Database query error:", err.message);
      return res
        .status(500)
        .json({ error: "Failed to fetch regulations", details: err.message });
    }

    if (!results.length) {
      return res.status(404).json({ message: "No regulations found" });
    }

    console.log("Query successful, sending results...");
    res.status(200).json(results);
  });
});

// RSDS Bulletin

app.get("/RSDSBulletin", (req, res) => {
  console.log("Fetching Bulletin...");

  const q = "SELECT * FROM rsdsbulletin_tbl ORDER BY id DESC;";

  db.query(q, (err, results) => {
    if (err) {
      console.error("Database query error:", err.message);

      return res
        .status(500)
        .json({ error: "Failed to fetch regulations", details: err.message });
    }

    if (!results.length) {
      return res.status(404).json({ message: "No bulletin found" });
    }

    console.log("Query successful, sending results...");
    res.status(200).json(results);
  });
});

// RSDS ADMINISTRATIVE ORDERS

app.get("/RSDSAdminOrders", (req, res) => {
  console.log("Fetching Orders...");

  const q = "SELECT * FROM rsdsadminorders_tbl ORDER BY id ASC;";

  db.query(q, (err, results) => {
    if (err) {
      console.error("Database query error:", err.message);
      return res
        .status(500)
        .json({ error: "Failed to fetch regulations", details: err.message });
    }
    if (!results.length) {
      return res.status(404).json({ message: "No Aministrative Orders found" });
    }
    console.log("Query successful, sending results...");
    res.status(200).json(results);
  });
});

//ANNOUNCEMENT

app.get("/RSDSAnnouncement", (req, res) => {
  console.log("Fetching announcements...");

  const q = `
    SELECT 
      id,
      title,
      announcement AS content,
      date,
      priority
    FROM rsdsannouncement_tbl 
    ORDER BY 
      CASE 
        WHEN priority = 'high' THEN 1
        WHEN priority = 'medium' THEN 2
        WHEN priority = 'low' THEN 3
        ELSE 4
      END ASC,
      date DESC;
  `;

  db.query(q, (err, results) => {
    if (err) {
      console.error("Database query error:", err.message);
      return res.status(500).json({
        error: "Failed to fetch announcements",
        details: err.message,
      });
    }

    // Format the results to match frontend expectations
    const formattedResults = results.map((announcement) => ({
      id: announcement.id,
      title: announcement.title,
      announcement: announcement.content, // Using 'content' as the announcement text
      date: announcement.date,
      priority: announcement.priority || "general", // Default to 'general' if null
    }));

    console.log("Successfully fetched announcements");
    res.status(200).json(formattedResults);
  });
});

// Server Listener
const PORT = process.env.PORT || 5175; // Use environment variable or default to 5175
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
