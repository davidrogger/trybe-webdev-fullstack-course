const { expect, should } = require('chai');
const { stub } = require('sinon');
const NotFoundError = require('../../errors/NotFoundError');

const { Book } = require('../../models');
const BookService = require('../../services/bookService');

const testBook = {
  id: 1,
  title: "Lord of the Rings",
  author: "J. R. R. Tolkien",
  pageQuantity: 1178,
  createdAt: "2001-09-28 01:00:00",
  updatedAt: "2001-09-28 01:00:00",
};

describe('Services Book funcionalities', () => {
  describe('getAll should return all books', () => {
    const getAllSub = stub(Book, 'findAll');
    let books;

    describe('When there is no book record', () => {
      before(async () => {
        getAllSub.resolves([]);
        books = await BookService.getAll();
      });

      after(() => {
        getAllSub.reset();
      });

      it('Should called book.findAll', () => {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });

      it('Should return an array', () => {
        expect(books).to.be.an('array');
      });

      it('Should be an empty array', () => {
        expect(books).to.be.empty;
      });      
    });

    describe('When there is books record', () => {
      before(async () => {
        getAllSub.resolves([testBook]);
        books = await BookService.getAll();
      });

      after(() => {
        getAllSub.restore();
      });

      it('Should called Book.findAll', async () => {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });

      it('Should return an array', async () => {
        expect(books).to.be.an('array');
      });

      it('Should be an array of objects', async () => {
        expect(books).to.be.deep.equal([testBook]);
      });      
    });
  });

  describe('getById should return a book', () => {
    const findByPkStub = stub(Book, 'findByPk');
    let book;

    describe('When the ID is not found', () => {
      before( async () => {
        findByPkStub.resolves(null);
      });

      after(() => {
        findByPkStub.reset();
        book = null;
      });

      it('Should throw an error "book" not found"', async () => {
        try {
          await BookService.getById(1000);
        } catch (error) {
          const { name, message } = error;
          expect(Book.findByPk.calledOnce).to.be.equals(true);
          expect(name).to.be.equal('NotFoundError');
          expect(name).not.to.equal('BadRequest');
          expect(message).to.be.equal('"book" not found');
        };
      });
    });
  })
});