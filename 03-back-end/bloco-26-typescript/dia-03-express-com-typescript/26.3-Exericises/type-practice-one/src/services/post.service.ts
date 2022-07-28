import { IPost } from "../interface/post.interface";
import connection from "../models/connection";
import PostModel from "../models/post.model";

export default class PostService {
  model: PostModel;

  constructor() {
    this.model = new PostModel(connection);
  }

  async getAll(): Promise<IPost[]> {
    return this.model.getAll();
  }
}