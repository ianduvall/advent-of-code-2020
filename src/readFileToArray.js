const fs = require('fs');

const readFileToArray = (filePath) => new Promise((resolve, reject) => fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) reject(error);
    resolve(data.split('\n'));
}));

module.exports = readFileToArray;
