const fs = require('node:fs/promises');

const writeToFile = async () => {
  try {
    await fs.writeFile('example.txt', 'Hello world from code');
    console.log('Write File successfully');
  } catch (error) {
    console.log('Error reading file : ', error);
  }
};

writeToFile();
