const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// GET request handler
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/index.html'));
});

// POST request handler
app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/submitted.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


