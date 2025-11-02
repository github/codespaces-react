require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

connectDB();

app.get('/api/health', (req, res) => {
  res.json({ ok: true, env: process.env.NODE_ENV || 'unknown', time: new Date().toISOString() });
});

// Example routes placeholder
app.get('/api/leaderboard', (req, res) => {
  res.json({ message: 'Leaderboard endpoint (stub)' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});