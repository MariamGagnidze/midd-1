const fs = require("fs/promises");

const writeFile = async (fileName, data) => {
  await fs.writeFile(fileName, JSON.stringify(data));
};

module.exports = writeFile;
