const { Router } = require('express');
const userController = require('../controllers/user.controller');
const rescue = require('express-rescue');

const userRoute = Router();

userRoute.post('/register', rescue(userController.create));

module.exports = userRoute;