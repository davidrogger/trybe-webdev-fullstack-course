import { StatusCodes } from "http-status-codes";
import { IPost } from "../interface/post.interface";
import connection from "../models/connection";
import PostModel from "../models/post.model";
import ErrorCustom from "../utils/error";

export default class PostService {
  model: PostModel;

  constructor() {
    this.model = new PostModel(connection);
  }

  async getAll(): Promise<IPost[]> {
    return this.model.getAll();
  };

  async getById(id: number): Promise<IPost> {
    const post = await this.model.getById(id);

    if (!post) throw new ErrorCustom(StatusCodes.NOT_FOUND, 'Post not found');

    return post;
  }
}