const { Router } = require('express');
const { getAllChocolates, getChocolateById } = require('../assets/fsHandler');

const route = Router();

route.get('/', async (_, res) => {
  try {
    const chocolates = await getAllChocolates();
    res.status(200).json({ chocolates });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const chocolate = await getChocolateById(id);
    res.status(200).json({ chocolate });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

module.exports = route;
