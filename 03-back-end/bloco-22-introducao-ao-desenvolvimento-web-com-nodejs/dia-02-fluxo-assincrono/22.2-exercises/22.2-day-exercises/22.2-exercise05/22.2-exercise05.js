const fs = require('fs').promises;

const words = [ 'Finally', 'I\'m', 'using', 'Promise all', '!!!' ]

const createFiles = async () => {
  const fileNames = words
    .map((word, index) => {
      const fileName = `file${index + 1}.txt`;
      fs.writeFile(`./${fileName}`, word);
      return fileName;      
    });

    const readFilePromises = fileNames
      .map((fileName) => {
        return fs.readFile(`./${fileName}`, 'utf-8')
    })
    const fileContents = await Promise.all(readFilePromises);
    
    const allContent = fileContents.join(' ');

    fs.writeFile('./fileAll.txt', allContent);
}

createFiles();