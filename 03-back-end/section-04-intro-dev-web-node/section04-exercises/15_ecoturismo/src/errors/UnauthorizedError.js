class UnauthorizedError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.status = 401;
    this.name = 'unauthorized';
  }
}

module.exports = {
  UnauthorizedError,
};
