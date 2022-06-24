const { Router } = require('express');

const userRouter = Router();

const userController = require('../controllers/userController');

userRouter.get('/:id', userController.findById);

userRouter.get('/search/:id', userController.findByIdAndEmail);

userRouter.post('/', userController.create);

userRouter.put('/:id', userController.update);

userRouter.delete('/:id', userController.remove);

module.exports = userRouter;