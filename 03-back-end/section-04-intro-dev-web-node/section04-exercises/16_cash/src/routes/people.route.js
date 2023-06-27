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
  const id = Number(req.params.id);
  const [[person]] = await peopleDB.findById(Number(id));
  if (person) res.status(200).json(person);
  else res.status(404).json({ message: 'ID not found' });
});

route.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const newPersonData = req.body;

  try {
    const updatedRows = await peopleDB.updateById(id, newPersonData);
    if (updatedRows > 0) res.status(200).json({ id, ...newPersonData });
    else res.status(404).json({ message: `ID: ${id} not found` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const deletedRows = await peopleDB.removeById(id);
    if (deletedRows > 0) res.status(200).json({ message: `People ID ${id} was deleted` });
    else res.status(404).json({ message: `ID: ${id} not found` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = route;
