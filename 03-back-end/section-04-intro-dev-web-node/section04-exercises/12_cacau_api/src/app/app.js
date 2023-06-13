const express = require('express');
const { getAllChocolates } = require('../assets/fsHandler');

const app = express();

app.use(express.json());

app.get('/chocolates', async (_, res) => {
  try {
    const chocolates = await getAllChocolates();
    res.status(200).json({ chocolates });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;
