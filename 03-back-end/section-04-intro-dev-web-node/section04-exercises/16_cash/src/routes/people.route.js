const { Router } = require('express');

const route = Router();

const peopleDB = require('../db/peopleDB');

route.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [{ insertId: id }] = await peopleDB.insert(person);
    res.status(201).json({ message: `New ID ${id} recorded with success!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.get('/', async (_req, res) => {
  try {
    const [people] = await peopleDB.findAll();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [[person]] = await peopleDB.findById(Number(id));
  if (person) res.status(200).json(person);
  else res.status(404).json({ message: 'ID not found' });
});

module.exports = route;
