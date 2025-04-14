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


// api/send-email.js
// const nodemailer = require('nodemailer');


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

//Licensing
// app.get("/licensing/:licenseId", (req, res) => {
//   const licenseId = req.params.licenseId;
//   const q = "SELECT url FROM licenseapp_tbl WHERE id = ?";

//   db.query(q, [licenseId], (err, results) => {
//     if (err) {
//       console.error("Database query error:", err);
//       return res.status(500).json({ error: "Database query error" });
//     }

//     if (results.length === 0) {
//       console.error("File not found for license ID:", licenseId);
//       return res.status(404).json({ error: "File not found" });
//     }

//     const filePath = results[0].url;

//     // Construct the absolute path to the file
//     const absoluteFilePath = path.join(__dirname, "uploads", filePath);

//     // Check if file exists
//     if (!fs.existsSync(absoluteFilePath)) {
//       console.error("File does not exist at path:", absoluteFilePath);
//       return res.status(404).json({ error: "File not found on server" });
//     }

//     // Send the file for download
//     res.download(absoluteFilePath, (err) => {
//       if (err) {
//         console.error("Error sending file:", err);
//         return res.status(500).json({ error: "Failed to download file" });
//       }
//     });
//   });
// });

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

  const sql =
    "INSERT INTO feedback_tbl (name, email, message) VALUES     (?, ?, ?)";
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

  const q = "SELECT * FROM rsdsadminorders_tbl ORDER BY id DESC;";

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
      priority,
      created_at,
      updated_at
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
        details: err.message 
      });
    }
    
    // Format the results to match frontend expectations
    const formattedResults = results.map(announcement => ({
      id: announcement.id,
      title: announcement.title,
      announcement: announcement.content, // Using 'content' as the announcement text
      date: announcement.date,
      priority: announcement.priority || 'general' // Default to 'general' if null
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
