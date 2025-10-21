require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const posts = [
  { username: "jim", title: "post 1" },
  { username: "kyle", title: "post 2" },
];

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

app.get("/api/tasks", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks ORDER BY deadline ASC");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ error: "Database fetch failed" });
  }
});

app.get("/api/tasks-with-subjects", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT t.task_id, t.title, t.description, t.deadline, t.priority, 
             t.subject_id, s.subject_name, t.user_id, t.is_completed, t.created_at, t.updated_at
      FROM tasks t
      LEFT JOIN subjects s ON t.subject_id = s.subject_id
      ORDER BY t.deadline ASC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching tasks with subjects:", err);
    res.status(500).json({ error: "Database fetch failed" });
  }
});


app.post("/api/tasks", async (req, res) => {
  try {
    const {
      title,
      description,
      deadline,
      created_on,
      daily_time,
      notify,
      priority,
      subject_id,
      user_id,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO tasks (title, description, deadline, priority, subject_id, user_id, is_completed, created_at, updated_at)
   VALUES ($1, $2, $3, $4, $5, $6, false, $7, NOW())
   RETURNING *`,
      [
        title,
        description,
        deadline,
        priority || "Medium",
        subject_id || null,
        user_id || 1,
        created_on,
      ]
    );
    console.log("Database insert successful!!");
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database insert failed" });
  }
});

app.put("/events/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const event = await pool.query(`
      UPDATE tasks
      SET is_completed=$1
      WHERE task_id=$2`,
      [true, id]
    );
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: "Error updating event status" });
  }
});



function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));