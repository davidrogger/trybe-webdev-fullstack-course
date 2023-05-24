class ErrorNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = 'ErrorNotFound';
  }
};

class ErrorUnauthorizedAcess extends Error {
  constructor(message) {
    super(message);
    this.name = 'ErrorUnauthorizedAcess';
  }
}

module.exports = {
  ErrorNotFound,
  ErrorUnauthorizedAcess,
};