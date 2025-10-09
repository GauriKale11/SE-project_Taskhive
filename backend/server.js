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

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database insert failed" });
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

// SIGNUP 
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password, contact, institute } = req.body;

    // Check if user already exists
    const userExist = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExist.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Insert new user
    const result = await pool.query(
      `INSERT INTO users (name, email, password, contact, institute_name, is_active, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, true, NOW(), NOW())
       RETURNING user_id, name, email`,
      [name, email, password, contact, institute]
    );

    res.status(201).json({ message: "Signup successful", user: result.rows[0] });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Signup failed" });
  }
});

// LOGIN 
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);

    if (user.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign(
      { user_id: user.rows[0].user_id, name: user.rows[0].name, email: user.rows[0].email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "2h" }
    );

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
