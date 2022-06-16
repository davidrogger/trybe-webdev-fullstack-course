const express = require('express');
const router = express.Router();

const valueValidation = require('../middlewares/valueValidation');
const passwordValidation = require('../middlewares/passwordValidation');

const User = require('../models/User');
const idValidation = require('../middlewares/idValidation');

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

router.get('/:id',[
  idValidation,
  async (req, res) => {
  const user = req.user;

  res.status(200).json(user);
}]);

router.put('/:id', [
  idValidation,
  valueValidation,
  async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;

    const user = { id, firstName, lastName, email, password };
    await User.update(user);
    res.status(200).json(user);
}]);

module.exports = router;