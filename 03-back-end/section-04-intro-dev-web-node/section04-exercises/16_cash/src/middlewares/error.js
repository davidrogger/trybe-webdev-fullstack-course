const statusCode = {};

module.exports = (error, _req, res, _next) => {
  res.status(statusCode[error.name] || 500).json({ message: error.message });
};
