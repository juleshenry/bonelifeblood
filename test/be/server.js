const express = require('express');
const cors = require('cors');
const app = express();
// Use the CORS middleware
app.use(cors());

const PORT = 3000; // You can use any port you prefer

// Define a route for GET requests to /api/boo
app.get('/api/boo', (req, res) => {
  res.json({ message: 'Boo! This is the response from the /api/boo endpoint.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
