const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the To-Do App!');
  });

  // Tasks route
app.get('/tasks', (req, res) => {
    res.send('List of tasks will be displayed here.');
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
