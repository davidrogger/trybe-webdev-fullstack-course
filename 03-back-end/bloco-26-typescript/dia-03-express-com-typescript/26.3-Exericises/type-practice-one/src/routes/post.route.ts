import { Router } from "express";
import PostController from "../controllers/post.controller";
import 'express-async-errors';

const postRoute = Router();
const postController = new PostController();

postRoute.get('/posts', postController.getAll);
postRoute.get('/post/:id', postController.getById);

export default postRoute;