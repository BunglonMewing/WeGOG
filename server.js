const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// API Contoh
app.get('/api/photos', (req, res) => {
  res.json([{ id: 1, title: "Foto Contoh" }]);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
