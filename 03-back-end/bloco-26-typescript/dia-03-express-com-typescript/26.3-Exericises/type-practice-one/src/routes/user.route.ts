import { Router } from "express";
import UserController from "../controllers/user.controller";
import 'express-async-errors';

const userRoute = Router();

const userController = new UserController();

userRoute.get('/users', userController.getAll);
userRoute.get('/user/:id', userController.getById);

export default userRoute;