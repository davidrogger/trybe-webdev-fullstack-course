const { Router } = require('express');
const chocolateService = require('../services/chocolates.service');

const route = Router();

route.get('/', async (_, res) => {
  try {
    const chocolates = await chocolateService.getAllChocolates();
    res.status(200).json({ chocolates });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const chocolate = await chocolateService.getChocolateById(id);
    res.status(200).json({ chocolate });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

route.get('/brand/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await chocolateService.brandIdExists(id);

    const chocolates = await chocolateService.getChocolatesByBrandId(id);
    res.status(200).json({ chocolates });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

module.exports = route;
