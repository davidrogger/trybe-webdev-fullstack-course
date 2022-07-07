const { Router } = require('express');
const userController = require('../controllers/user.controller');
const validateJWT = require('../middlewares/validateJWT');
const rescue = require('express-rescue');

const userRoute = Router();

userRoute.post('/register', rescue(userController.create));
userRoute.post('/login', rescue(userController.login));
userRoute.get('/me', [rescue(validateJWT), rescue(userController.painel)]);
userRoute.get('/top-secret', [rescue(validateJWT), rescue(userController.topSecret)]);

module.exports = userRoute;