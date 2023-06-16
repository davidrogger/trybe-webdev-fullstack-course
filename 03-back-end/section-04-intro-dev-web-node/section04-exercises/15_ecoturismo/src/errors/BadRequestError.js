class BadRequestError extends Error {
  constructor(message) {
    super();
    this.name = 'badrequest';
    this.status = 400;
    this.message = message;
  }
}

module.exports = {
  BadRequestError,
};
