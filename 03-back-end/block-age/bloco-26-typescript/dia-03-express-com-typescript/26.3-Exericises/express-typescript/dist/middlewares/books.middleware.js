"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const properties = ['title', 'price', 'author', 'isbn'];
function validateProperties(book) {
    for (let i = 0; i < properties.length; i += 1) {
        if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
            return [false, properties[i]];
        }
    }
    return [true, null];
}
;
function validateValue(book) {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i += 1) {
        const [property, value] = entries[i];
        if (!value) {
            return [false, property];
        }
    }
    return [true, null];
}
function validationBook(req, res, next) {
    const book = req.body;
    let [valid, property] = validateProperties(book);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(`The field ${property} is required`);
    }
    next();
}
exports.default = validationBook;
