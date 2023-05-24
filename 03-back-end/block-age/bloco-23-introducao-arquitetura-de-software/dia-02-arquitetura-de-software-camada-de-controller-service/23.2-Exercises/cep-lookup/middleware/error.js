const { HTTP_NOT_FOUND, HTTP_BAD_REQUEST } = require('../status/status');

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res
      .status(HTTP_NOT_FOUND)
      .json({ error: { code: 'invalidData', message: err.details[0].message } });
  }

  const statusByErrorCode = {
    BadRequest: HTTP_BAD_REQUEST,
    notFound: HTTP_NOT_FOUND,
    alreadyExists: 409,
  };

  const status = statusByErrorCode[err.code] || 500;

  res
    .status(status)
    .json({ error: { message: err } });
};