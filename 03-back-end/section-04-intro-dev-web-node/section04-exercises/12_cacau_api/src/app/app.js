const express = require('express');
const chocolatesController = require('../controllers/chocolates.controllers');

const app = express();

app.use(express.json());

app.use('/chocolates', chocolatesController);

module.exports = app;
