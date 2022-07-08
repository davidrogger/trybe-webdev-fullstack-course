const { Router } = require('express');
require('express-async-errors');
const userController = require('../controllers/user.controller');

const userRoute = Router();

userRoute.post('/login', userController.login);

module.exports = userRoute;