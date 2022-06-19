const { HTTP_BAD_RESQUEST } = require('../status/status');

const cepValidation = (req, res, next) => {
  const { cep } = req.params;

  const regex = /\d{5}-?\d{3}/;
  const cepFormatTest = regex.test(cep);
  const length = 8;
  const cepClean = cep.replace('-', '');
  const lengthTest = cepClean.length === length;

  if (cepFormatTest || lengthTest) {
    return res
      .status(HTTP_BAD_RESQUEST)
      .json({ error: { code: 'invalidData', message: 'CEP inválido' } });
  }
  next();
};

module.exports = cepValidation;