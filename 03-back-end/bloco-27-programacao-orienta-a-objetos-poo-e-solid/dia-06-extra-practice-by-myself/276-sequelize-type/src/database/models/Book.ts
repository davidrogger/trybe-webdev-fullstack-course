import { Model } from 'sequelize';
import db from '.'
import attributes from '../attributes/Book.attributes';

class Books extends Model {
  id!: number;
  title!:string;
  price!: number;
  author!: string;
  isbn!: string;
};

Books.init(
  attributes,
  {
    sequelize: db,
    modelName: 'Books',
    timestamps: false
  },
  );

  export default Books;