const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Add your login validation logic here
  // If login is successful
  res.redirect('/home.html');
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  // Add your signup validation logic here
  // If signup is successful
  res.redirect('/login.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});