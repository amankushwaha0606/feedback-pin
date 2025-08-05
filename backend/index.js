const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database("./pins.db");
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS pins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      x REAL,
      y REAL,
      content TEXT
    );`
  );
});

app.get("/api/pins", (req, res) => {
  db.all("SELECT * FROM pins", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/api/pins", (req, res) => {
  const { x, y, content } = req.body;
  db.run(
    `INSERT INTO pins (x, y, content) VALUES (?, ?, ?)`,
    [x, y, content],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, x, y, content });
    }
  );
});

app.put("/api/pins/:id", (req, res) => {
  const { content } = req.body;
  db.run(
    `UPDATE pins SET content = ? WHERE id = ?`,
    [content, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
});

app.get("/api/pins/:id", (req, res) => {
  db.get("SELECT * FROM pins WHERE id = ?", [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
});

app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});
