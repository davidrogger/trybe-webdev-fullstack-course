import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import PostService from "../services/post.service";
import validate from "../services/validation.service";

export default class PostController {
  constructor(private postService = new PostService()) { };

  getAll = async (_req: Request, res: Response): Promise<void>  => {
    const posts = await this.postService.getAll();
    res.status(StatusCodes.OK).json(posts);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = validate.idFormat(req.params);
    const post = await this.postService.getById(id);
    res.status(StatusCodes.OK).json(post);
  };
}

