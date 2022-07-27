import { Router } from "express";
import UserController from "../controllers/user.controller";
import 'express-async-errors';

const userRoute = Router();

const userController = new UserController();

userRoute.get('/user/:id', userController.getById);
userRoute.put('/user/:id', userController.update);
userRoute.delete('/user/:id', userController.remove);
userRoute.post('/user', userController.create);
userRoute.get('/users', userController.getAll);

export default userRoute;