const { Router } = require('express');
require('express-async-errors');
const userController = require('../controllers/user.controller');
const authentication = require('../middlewares/authentication');

const userRoute = Router();

userRoute.post('/login', userController.login);
userRoute.use(authentication);
userRoute.get('/', userController.getAll);

module.exports = userRoute;