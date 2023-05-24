module.exports = (err, _req, res, _next) => {
  const statusGlossary = {
    NOT_FOUND: 404,
    BAD_RESQUEST: 500,
  };
  

  const status = statusGlossary[err.status] || statusGlossary.BAD_RESQUEST;

  res.status(status).json({ message: err.message });
};