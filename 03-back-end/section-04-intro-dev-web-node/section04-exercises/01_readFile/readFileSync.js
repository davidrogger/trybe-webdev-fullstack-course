const fs = require('fs');

const fileName = 'myFile.txt';

try {
  const data = fs.readFileSync(fileName, 'utf8')
  console.log(data)
} catch (e) {
  console.error('Erro ao ler o arquivo: %s', e.path);
  console.log(e);
}