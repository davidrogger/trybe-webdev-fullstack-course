const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(message, (answer) => {
      readlineInterface.close();

      resolve(answer);
    });
  });
}

const start = async () => {
  const fileName = await question('Type the File name to read: ');
  
  const fileContent = await fs.readFile(fileName, 'utf-8')
    .catch((err) => {
      console.log(`Something wen wrong ${err}`);
      return false;
    });

  if(!fileContent) return;

  const oldWord = await question('What word do you want to replace? ');
  const newWord = await question('Should be replace for what word? ');

  const newContent = fileContent.replace(new RegExp(oldWord, 'g'), newWord);

  console.log('Replace results:')
  console.log(newContent);

  const destinationPath = await question('Where do you want to save the file? ');
  await fs.writeFile(destinationPath, newContent);
}

start();