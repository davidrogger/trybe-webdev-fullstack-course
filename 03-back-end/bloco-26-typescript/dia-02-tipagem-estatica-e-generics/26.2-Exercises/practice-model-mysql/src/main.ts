import BookModel from "./models/Book";
import connection from "./models/connection";
import { Book } from "./models/Book";

const main = async (): Promise<Book[]> => {
  const bookModel = new BookModel(connection);

  const books = await bookModel.getAll();
  console.log(books);
  return books;
}

main();