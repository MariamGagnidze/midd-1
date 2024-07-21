const fs = require("fs/promises");

const readFile = async (fileName) => {
  const data = await fs.readFile(fileName, "utf-8");
  return JSON.parse(data);
};

module.exports = readFile;
