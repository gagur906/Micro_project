// app.js
const express = require('express');
const path = require('path');
const data = require('./data/items.json');

const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API route to send JSON data
app.get('/api/items', (req, res) => {
    res.json(data);
});

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});