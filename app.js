
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Simple Node App🚀');
});

app.get('/about', (req, res) => {
  res.json({ message: 'This is a simple Express app built by Krishna.' });
});

app.get('/status', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



