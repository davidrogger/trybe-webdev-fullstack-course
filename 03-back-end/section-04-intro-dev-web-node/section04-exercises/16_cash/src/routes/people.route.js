const { Router } = require('express');

const route = Router();

const peopleDB = require('../db/peopleDB');

route.post('/', async (req, res) => {
  const person = req.body;
  const [{ insertId: id }] = await peopleDB.insert(person);
  res.status(201).json({ message: `New ID ${id} recorded with success!` });
});

route.get('/', async (_req, res) => {
  const [people] = await peopleDB.findAll();
  res.status(200).json(people);
});

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [[person]] = await peopleDB.findById(Number(id));
  res.status(200).json(person);
});

module.exports = route;
