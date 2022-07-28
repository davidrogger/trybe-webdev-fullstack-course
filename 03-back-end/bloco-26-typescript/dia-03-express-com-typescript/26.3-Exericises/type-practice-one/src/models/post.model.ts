import { Pool } from "mysql2/promise";
import { IPost } from "../interface/post.interface";

class PostModel {
  public connection: Pool

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IPost[]> {
    const query = 'SELECT * FROM Posts;';
    const [posts] = await this.connection.query(query);
    return posts as IPost[];
  };

};

export default PostModel;