const { Router } = require('express');
const chocolateService = require('../services/chocolates.service');

const route = Router({ strict: true });

route.get('/total', async (_, res) => {
  try {
    const total = await chocolateService.getTotalChocolates();
    res.status(200).json({ total });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

route.get('/', async (_, res) => {
  try {
    const chocolates = await chocolateService.getAllChocolates();
    res.status(200).json({ chocolates });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.get('/search', async (req, res) => {
  try {
    const { name } = req.query;
    const chocolates = await chocolateService.getAllChocolatesIncludesName(name);
    const status = chocolates.length ? 200 : 404;

    res.status(status).json({ chocolates });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
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

route.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const chocolateFound = await chocolateService.getChocolateById(id);

    const updatedData = await chocolateService.verifyChocolateBody(req.body);

    const chocolate = await chocolateService.updateChocolateById(
      { ...chocolateFound, ...updatedData },
    );
    res.status(200).json({ chocolate });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

module.exports = route;
