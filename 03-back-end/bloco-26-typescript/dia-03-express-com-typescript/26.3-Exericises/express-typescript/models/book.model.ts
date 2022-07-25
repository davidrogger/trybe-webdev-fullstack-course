import { Pool, ResultSetHeader } from "mysql2/promise";
import Book from "../interfaces/book.interface";

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const [rows] = await this.connection.execute('SELECT * FROM books;');
    return rows as Book[];
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUE (?, ?, ?, ?)',
      [title, price, author, isbn],
      );
    
      return { id, ...book };
  }

  public async getById(id: number): Promise<Book> {
    const result = await this.connection.execute(
      'SELECT * FROM books WHERE id = ?;',
      [id],
    );
    const [rows] = result;
    const [book] = rows as Book[];
    return book;
  }
}