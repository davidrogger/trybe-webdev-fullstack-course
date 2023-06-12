const express = require('express');
const teams = require('./assets/teams');

const app = express();

app.get('/teams', (_, res) => {
  res.status(200).json(teams);
});

module.exports = app;
