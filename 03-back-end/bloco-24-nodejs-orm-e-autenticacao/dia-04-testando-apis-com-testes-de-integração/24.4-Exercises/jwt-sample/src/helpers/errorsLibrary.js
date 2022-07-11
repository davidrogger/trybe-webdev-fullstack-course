class ErrorNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = 'ErrorNotFound';
  }
}

class ErrorNotAuthorized extends Error {
  constructor(message) {
    super(message);
    this.name = 'ErrorNotAuthorized';
  }
}

module.exports = {
  ErrorNotFound,
  ErrorNotAuthorized,
};