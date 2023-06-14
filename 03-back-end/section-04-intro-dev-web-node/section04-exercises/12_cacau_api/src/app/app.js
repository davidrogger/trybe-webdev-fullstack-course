const express = require('express');
const chocolatesRoute = require('../routes/chocolates');

const app = express();

app.use(express.json());

app.use('/chocolates', chocolatesRoute);

module.exports = app;
