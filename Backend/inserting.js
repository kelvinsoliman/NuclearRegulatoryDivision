

// //POST SECTION
app.post("/lres", (req, res) => {
  const q = "INSERT INTO feedback_tbl (`message`) VALUES (?)";
  const values = ["this is the message..."];
  db.query(q, [values], (err, data) => {
    if (err) {
      console.error("Error fetching data ", err);
      return res.status(500).json({ error: "Database query error" });
    }
    return res.json(data);
  });
});

