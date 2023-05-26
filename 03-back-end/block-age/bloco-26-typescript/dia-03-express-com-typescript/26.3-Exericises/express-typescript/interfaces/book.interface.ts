export default interface Book {
  id?: number;
  title: string;
  price: number;
  author: string;
  isbn: string;
}

export interface pathBook {
  title?: string;
  price?: number;
  author?: string;
  isbn?: string;
}