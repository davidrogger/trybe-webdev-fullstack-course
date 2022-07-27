import { Pool, ResultSetHeader } from "mysql2/promise";
import IUser, { InewUser } from "../interface/user.interface";

interface emailFound {
  id: number;
}

export default class UserModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  };

  public async getAll(): Promise<IUser[]> {
    const query = 'SELECT id, name, email FROM Users;';
    const [rows] = await this.connection.execute(query);
    return rows as IUser[];
  }

  public async getById(id: number): Promise<IUser> {
    const query = 'SELECT name, email FROM Users WHERE id=?;';
    const [result] = await this.connection.execute(query, [id]);
    const [user] = result as IUser[];
    return user;
  }

  public async emailExists(email: string): Promise<number> {
    const query = 'SELECT id FROM Users WHERE email=?;';
    const [result] = await this.connection.query(query, [email]);
    const [{ id }] = result as emailFound[];
    return id;
  }

  public async create(user: IUser): Promise<IUser> {
    const { name, email, password } = user;
    const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?);';
    const [{ insertId: id }] = await this.connection.query<ResultSetHeader>(query, [name, email, password]);
    delete user.password;
    return { id, ...user };
  }

  public async update(id: number, user: InewUser): Promise<IUser> {
    const { name, email, password } = user;
    const query = 'UPDATE Users SET name=?, email=?, password=? WHERE id=?';
    await this.connection.query(query, [name, email, password, id]);
    return { name, email };
  }
}