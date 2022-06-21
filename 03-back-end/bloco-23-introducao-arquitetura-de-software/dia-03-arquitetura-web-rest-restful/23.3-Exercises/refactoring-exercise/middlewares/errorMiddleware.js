module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res
      .status(404)
      .json({ error:{ code: 'invalidDate', message: err.details[0].message } });
  }
  res.status(500).json({ Error: { code: err.code, message: err.message } });
  return;
}