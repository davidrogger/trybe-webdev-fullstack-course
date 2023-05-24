const { status } = require('../helpers/');

module.exports = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError': res.status(status.HTTP_BAD_REQUEST).json( { message } ); break;
    case 'NotFoundError': res.status(status.HTTP_NOT_FOUND).json( { message } ); break;
    default: res.status(status.INTERNAL_ERROR).json( { message } );
  }
};
