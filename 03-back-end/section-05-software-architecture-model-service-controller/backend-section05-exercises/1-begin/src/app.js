const express = require('express');
const { passengersModel } = require('./models');

const app = express();

app.use(express.json());

app.get('/passengers', async (_req, res) => {
  const passengers = await passengersModel.findAll();
  res.status(200).json({ passengers });
});

app.get('/passengers/:id', async (req, res) => {
  const passenger = await passengersModel.findById(req.params.id);
  if (!passenger) return res.status(404).json({ message: 'Passenger not found' });
  res.status(200).json({ passenger });
});

module.exports = app;
