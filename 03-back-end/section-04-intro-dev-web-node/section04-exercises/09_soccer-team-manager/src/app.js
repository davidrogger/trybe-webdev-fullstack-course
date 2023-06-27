const express = require('express');
const teams = require('./assets/teams');

const app = express();

app.use(express.json());

app.get('/teams', (_, res) => {
  res.status(200).json(teams);
});

app.post('/teams', (req, res) => {
  const payload = { ...req.body };
  teams.push(payload);
  res.status(201).json({ team: payload });
});

module.exports = app;
