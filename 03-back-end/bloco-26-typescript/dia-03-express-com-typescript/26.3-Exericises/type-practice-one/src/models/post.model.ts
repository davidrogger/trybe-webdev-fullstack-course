import { Pool, ResultSetHeader } from "mysql2/promise";
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

  async getById(id: number): Promise<IPost> {
    const query = 'SELECT * FROM Posts WHERE id=?;';
    const [result] = await this.connection.query(query, [id]);
    const [post] = result as IPost[];
    return post;
  };

  async create(post: IPost): Promise<IPost> {
    const { title, author, category, publicationDate } = post;
    const query = `
    INSERT INTO Posts (title, author, category, publicationDate)
    VALUES (?, ?, ?, ?);`;
    const [{ insertId }] = await this.connection.query<ResultSetHeader>(query, [title, author, category, publicationDate]);
    return { id: insertId, ...post };
  }
};

export default PostModel;