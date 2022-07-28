import { Router } from "express";
import PostController from "../controllers/post.controller";

const postRoute = Router();
const postController = new PostController();

postRoute.get('/posts', postController.getAll);

export default postRoute;