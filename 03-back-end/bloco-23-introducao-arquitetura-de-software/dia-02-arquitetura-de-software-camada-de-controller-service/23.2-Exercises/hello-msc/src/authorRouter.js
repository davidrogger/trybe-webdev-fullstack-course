const express = require('express');
const router = express.Router();

const Author = require('../models/Author');

router.get('/', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors)
});

router.post('/', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (Author.isValid(firstName, middleName, lastName)) {
    res.status(400).json({ message: 'invalid data' });
  };

  await Author.create(firstName, middleName, lastName);

  res.status(201).json({ message: 'Successfully Registered' })
});

module.exports = router;