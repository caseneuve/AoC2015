const fs = require("fs");
const [getDayAndYear, fetchInput, readInputFile] = require("./tools/input");
const dotenv = require("dotenv");

const requireSolutions = (num) => {
  const day = num < 10 ? `0${num}` : num;
  const modulePath = `./solutions/day${day}.js`;
  if (fs.existsSync(modulePath)) {
    return require(modulePath);
  }
  console.error(`There's no solution for day ${day} yet!`);
  process.exit();
};

const printSolutions = (day, year, part) => {
  const solutions = requireSolutions(day);
  const input = readInputFile(day);

  console.log(`\n  AoC ${year} day ${day}:`);
  console.log(" =====================");

  [...solutions].forEach((fn, i) => {
    if (isNaN(part) | (part == i + 1)) {
      console.log(`  solution for part ${i + 1}: `, fn(input));
      console.log(" ---------------------");
    }
  });
};

const main = () => {
  const config = dotenv.config().parsed;
  const [, , action, argDay, partNum] = process.argv;
  const [day, year] = getDayAndYear(argDay, config.YEAR);

  switch (action) {
    case "in":
      fetchInput(day, year, config.AOC_SESSION);
      break;
    case "out":
      printSolutions(day, year, partNum);
    default:
      console.error("Args should be [in|out] [day] [part]");
  }
};

main();
