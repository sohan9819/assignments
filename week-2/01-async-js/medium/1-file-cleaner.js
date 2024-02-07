const fs = require('node:fs/promises');

const fileCleaner = async () => {
  try {
    const data = await fs.readFile('example.txt', { encoding: 'utf8' });

    const filteredData = data
      .split(' ')
      .filter((element) => element !== '')
      .join(' ');

    await fs.writeFile('example.txt', filteredData);
    console.log('Filtered file  successfully');
  } catch (error) {
    console.log('Error : ', error);
  }
};

fileCleaner();
