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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const readline_sync_1 = __importDefault(require("readline-sync"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const title = readline_sync_1.default.question('Type the book name: ');
    const price = readline_sync_1.default.questionFloat('Type the book price: ');
    const author = readline_sync_1.default.question('Type the books author: ');
    const isbn = readline_sync_1.default.question('Type the isbn of the book: ');
    const result = yield connection_1.default.execute('INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?);', [title, price, author, isbn]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return insertId;
});
console.log(main());
