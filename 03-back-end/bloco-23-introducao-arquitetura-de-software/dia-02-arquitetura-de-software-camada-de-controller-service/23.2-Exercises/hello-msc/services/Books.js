const Book = require('../models/Books');
const Author = require('../models/Author');

const getAll = async () => Book.getAll();

const create = async (title, authorId) => {
  
  const validId = await Author.findById(authorId);
  
if (validId) {
  return Book.create(title, authorId);
}

return {
  error: {
    code: 'notFound',
    message:`The author need to exists in our database ID: ${authorId} invalid`
  }
};

};

module.exports = {
  getAll,
  create,
};