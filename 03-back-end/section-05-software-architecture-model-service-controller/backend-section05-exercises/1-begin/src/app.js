const express = require('express');
const { passengersModel } = require('./models');

const app = express();

app.use(express.json());

app.get('/passengers', async (_req, res) => {
  const passengers = await passengersModel.findAll();
  res.status(200).json({ passengers });
});

module.exports = app;
