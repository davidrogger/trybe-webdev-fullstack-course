const fs = require('fs');

const { filePath, incodingType } = require('../defaultVariables');

const checkData = (req, _res, next) => {
  const data = JSON.parse(fs.readFileSync(filePath, incodingType));

  req.data = data;
  next();
}

module.exports = checkData;