import connection from "./models/connection";
import readline from 'readline-sync';

import BookModel, { Book } from "./models/Book";

const main = async (): Promise<Book> => {
  const bookModel = new BookModel(connection);

  const title = readline.question('Type the book name: ');
  const price = readline.questionFloat('Type the book price: ');
  const author = readline.question('Type the books author: ');
  const isbn = readline.question('Type the isbn of the book: ');

  const newBook: Book = { title, price, author, isbn };

  const createdBook = await bookModel.create(newBook);
  console.log(createdBook);
  return createdBook;

}

console.log(main());