import { INTEGER, STRING, DECIMAL, Model } from 'sequelize';
import db from '.'

class Books extends Model {
  id!: number;
  title!:string;
  price!: number;
  author!: string;
  isbn!: string;
};

Books.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: STRING(30),
      allowNull: false,
    },
    releaseYear: {
      type: STRING(4),
      allowNull: false,
      field: 'release_year'
    },
    numberPages: {
      type: STRING(100),
      allowNull: false,
      field: 'number_pages'
    },
  },
  {
    sequelize: db,
    modelName: 'Books',
    timestamps: false
  },
  );

  export default Books;