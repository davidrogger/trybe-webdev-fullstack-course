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

module.exports = route;
