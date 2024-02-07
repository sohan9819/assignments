const fs = require('node:fs/promises');

const readFromFile = async () => {
  try {
    const data = await fs.readFile('example.txt', { encoding: 'utf8' });
    console.log('File data : ', data);
  } catch (error) {
    console.log('Error reading file : ', error);
  }
};

readFromFile();
