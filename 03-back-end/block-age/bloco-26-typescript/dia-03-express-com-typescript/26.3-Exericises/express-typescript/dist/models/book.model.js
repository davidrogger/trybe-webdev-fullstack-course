"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BookModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.connection.execute('SELECT * FROM books;');
            return rows;
        });
    }
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, price, author, isbn } = book;
            const [{ insertId: id }] = yield this.connection.execute('INSERT INTO books (title, price, author, isbn) VALUE (?, ?, ?, ?)', [title, price, author, isbn]);
            return Object.assign({ id }, book);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute('SELECT * FROM books WHERE id = ?;', [id]);
            const [rows] = result;
            const [book] = rows;
            return book;
        });
    }
    update(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, price, isbn } = book;
            yield this.connection.execute(`
      UPDATE books
      SET title=?, author=?, price=?, isbn=?
      WHERE id=?;
      `, [title, author, price, isbn, id]);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute('DELETE FROM books WHERE id=?;', [id]);
        });
    }
}
exports.default = BookModel;
