const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.listen(PORT, () =>
    console.log('listening on port', PORT));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productos.html'));
});

app.get('/productos/1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/producto1.html'));
});