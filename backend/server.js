require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// 🔹 Middleware: authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.error("Token verification failed:", err);
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

// 🔹 Fetch all tasks (only for logged-in user)
app.get("/api/tasks", authenticateToken, async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const result = await pool.query(
      "SELECT * FROM tasks WHERE user_id = $1 ORDER BY deadline ASC",
      [user_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ error: "Database fetch failed" });
  }
});

// 🔹 Add new task
app.post("/api/tasks", authenticateToken, async (req, res) => {
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
    } = req.body;

    const user_id = req.user.user_id; // ✅ from token

    const result = await pool.query(
      `INSERT INTO tasks 
      (title, description, deadline, priority, subject_id, user_id, is_completed, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, false, $7, NOW())
       RETURNING *`,
      [
        title,
        description,
        deadline,
        priority || "Medium",
        subject_id || null,
        user_id,
        created_on,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error inserting task:", err);
    res.status(500).json({ error: "Database insert failed" });
  }
});

<<<<<<< HEAD
// 🔹 SIGNUP
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password, contact, institute } = req.body;
=======
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
>>>>>>> main

    const userExist = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExist.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    const result = await pool.query(
      `INSERT INTO users (name, email, password, contact, institute_name, is_active, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, true, NOW(), NOW())
       RETURNING user_id, name, email, contact, institute_name`,
      [name, email, password, contact, institute]
    );

    res.status(201).json({ message: "Signup successful", user: result.rows[0] });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Signup failed" });
  }
});

// 🔹 LOGIN
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );

    if (user.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const u = user.rows[0];

    const token = jwt.sign(
      {
        user_id: u.user_id,
        name: u.name,
        email: u.email,
        contact: u.contact,
        institute_name: u.institute_name,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        user_id: u.user_id,
        name: u.name,
        email: u.email,
        contact: u.contact,
        institute_name: u.institute_name,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

// 🔹 Get logged-in user profile
app.get("/api/profile", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.user_id; // extracted from JWT token
    const result = await pool.query(
      `SELECT name, email, contact, institute_name 
       FROM users 
       WHERE user_id = $1`,
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});


// 🔹 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
