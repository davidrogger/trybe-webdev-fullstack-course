// const { expect } = require('chai');
// const { Book } = require('../../models');

// describe('Model Book', () => {
//   it('Should have property "title", "author", "pageQuantity" and "publisher"', () => {
    // const book = new Book();
//     expect(book).to.have.property('title');
//     expect(book).to.have.property('author');
//     expect(book).to.have.property('pageQuantity');
//     expect(book).to.have.property('publisher');
// better than the exercise feedback
      // ["title", "author", "pageQuantity", "publisher"].forEach((property) => expect(book).to.have.property(property))
//   })
// });

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../models/book');

describe('Model book', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book()
  it('shoul have book name', () => {
    checkModelName(book)('Book');
  });

  it('should have the properties "title", "author", "pageQuantity" and "publisher"', () => {
    ["title", "author", "pageQuantity", "publisher"].forEach(checkPropertyExists(book));
  });

});