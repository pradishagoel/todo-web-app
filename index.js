// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set up static files (CSS, JS, images)
app.use(express.static('public'));

// Set up routes for your To-Do application
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
