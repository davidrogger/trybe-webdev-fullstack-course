import Book from "./IBook";

interface IUserBook {
  firstName: string;
  lastName: string;
  age:number;
  books: Book[]
};

export default IUserBook;