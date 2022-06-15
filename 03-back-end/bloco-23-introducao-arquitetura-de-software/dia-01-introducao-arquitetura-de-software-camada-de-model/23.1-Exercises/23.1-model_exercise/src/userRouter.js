const express = require('express');
const router = express.Router();

const valueValidation = require('../middlewares/valueValidation');
const passwordValidation = require('../middlewares/passwordValidation');

const User = require('../models/User');

router.get('/', async (req, res) => {
  const users = await User.getAll();
  res.status(200).json(users);
})

router.post('/', [
  valueValidation,
  passwordValidation,
  async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  
  
  await User.create(firstName, lastName, email, password);

  const { id } = await User.lastId();
  const newUser = { id, firstName, lastName, email, password };
  res.status(201).json(newUser);
  
}]);

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) return res.status(404).json({ error: true, message: 'User not found' });

  res.status(200).json(user);
});

module.exports = router;