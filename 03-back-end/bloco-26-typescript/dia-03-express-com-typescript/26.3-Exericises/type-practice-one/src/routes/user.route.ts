import { Router } from "express";
import UserController from "../controllers/user.controller";

const userRoute = Router();

const userController = new UserController();

userRoute.get('/users', userController.getAll);

export default userRoute;