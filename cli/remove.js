#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const readFile = require("../utils/readFile");
const writeFile = require("../utils/writeFile");

program
  .command("remove <id>")
  .description("Remove an expense by ID")
  .action(async (id) => {
    try {
      const items = await readFile("productsData.json");
      console.log("Current items:", items); 

      const idNumber = parseInt(id, 10); 
      const index = items.findIndex((item) => item.id === idNumber);

      if (index === -1) {
        console.log("Expense not found");
        return;
      }

      const [removedItem] = items.splice(index, 1);
      await writeFile("productsData.json", items);
      console.log(`Removed: ${JSON.stringify(removedItem)}`);
    } catch (error) {
      console.error("Error:", error.message);
    }
  });

program.parse();
