const readFile = require("./readFile");
const writeFile = require("./writeFile");
const currentTime = require("./time");

async function main() {
  try {
    const data = await readFile("productsData.json");
    console.log("Data:", data);
    const currentTime = formatCurrentTime();
    console.log("Current Time:", currentTime);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
