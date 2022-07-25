"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const books_middleware_1 = __importDefault(require("../middlewares/books.middleware"));
const route = (0, express_1.Router)();
const booksController = new books_controller_1.default();
route.get('/books', booksController.getAll);
route.get('/book/:id', booksController.getById);
route.post('/book', [books_middleware_1.default, booksController.create]);
exports.default = route;
