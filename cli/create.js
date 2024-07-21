#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const readFile = require("../utils/readFile");
const writeFile = require("../utils/writeFile");
const currentTime = require("../utils/time");

const generateId = (items) => {
  const maxId = items.reduce((max, item) => (item.id > max ? item.id : max), 0);
  return maxId + 1;
};

program
  .command("create <name> <price>")
  .description("Add a new expense")
  .action(async (name, price) => {
    try {
      const items = await readFile("productsData.json");
      const newExpense = {
        id: generateId(items),
        name,
        price: `${price}$`,
        time: currentTime(),
      };
      items.push(newExpense);
      await writeFile("productsData.json", items);
      console.log("New expense added:", JSON.stringify(newExpense));
    } catch (error) {
      console.error("Error:", error.message);
    }
  });

program.parse();
