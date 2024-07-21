#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const readFile = require("../utils/readFile"); 

program
  .command("search <keyword>")
  .description("Search for products by name and time")
  .action(async (keyword) => {
    try {
      const items = await readFile("productsData.json");
      const matches = items.filter(
        (item) =>
          item.name.toLowerCase().includes(keyword.toLowerCase()) ||
          item.time.includes(keyword)
      );

      if (matches.length === 0) {
        console.log(`No products found matching "${keyword}".`);
      } else {
        console.log("Found products:", JSON.stringify(matches, null, 2));
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  });

program.parse();
