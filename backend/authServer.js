require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const pool = require('./db')

const app = express()
app.listen(4000)
app.use(express.json())

let refreshTokens = []
const saltRounds = 10

app.post('/signup', async (req, res) => {
  const { username, password } = req.body
  
  try {
    const existingUser = await pool.query(
      "SELECT username FROM users WHERE username = $1", 
      [username]
    )
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'Username already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds)
    
    await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2)",
      [username, hashedPassword]
    )

    res.status(201).json({ message: 'User created successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Database signup failed" })
  }
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const result = await pool.query(
      "SELECT username, password FROM users WHERE username = $1", 
      [username]
    )
    const user = result.rows[0]

    if (!user) {
      return res.status(403).json({ message: 'Invalid username or password' })
    }
    
    const valid = await bcrypt.compare(password, user.password)
    
    if (!valid) {
      return res.status(403).json({ message: 'Invalid username or password' })
    }

    const payload = { name: username }
    const accessToken = generateAccessToken(payload)
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)
    
    refreshTokens.push(refreshToken) 

    res.json({ accessToken, refreshToken })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Database login failed" })
  }
})

app.post('/token', (req, res) => {
  const refreshToken = req.body.token
  if (!refreshToken) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken })
  })
})

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' })
}