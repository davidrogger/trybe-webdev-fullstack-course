const fs = require('fs');

function leArquivo(nomeDoArquivo) {

  try {
    return fs.readFileSync(nomeDoArquivo, 'utf-8');
  } catch(err) {
    return null;
  }

} 

module.exports = leArquivo;