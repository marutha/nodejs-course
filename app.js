const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>This is add-product page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Wow this is</h1>');
});

server.listen(3000);