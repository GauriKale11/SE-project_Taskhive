require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const pool = require('./db');

const app = express();


app.use(cors());
app.use(express.json()); 


const posts = [
  { username: 'jim', title: 'post 1' },
  { username: 'kyle', title: 'post 2' }
];


app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
});

app.post('/api/tasks', async (req, res) => {
  try {
    const { title, description, deadline, user_id, priority, subject_id } = req.body;

    const result = await pool.query(
      `INSERT INTO tasks (title, description, deadline, priority, subject_id, user_id, is_completed, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, false, NOW(), NOW())
       RETURNING *`,
      [title, description, deadline, priority || 'Medium', subject_id || null, user_id || 1]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database insert failed' });
  }
});


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
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
