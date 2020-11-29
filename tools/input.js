const fs = require("fs");
const got = require("got");
const path = require("path");

const getDayAndYear = (day, year) => {
  if (isNaN(day) | ((day < 1) | (day > 25))) {
    day = new Date().getDate();
    if (day > 25) {
      day = 1;
    }
  }
  if (isNaN(year)) {
    year = new Date().getFullYear();
  }
  return [day, year];
};

const makeUrl = (day, year) => {
  return `https://adventofcode.com/${year}/day/${day}/input`;
};

const inputDirPath = () => {
  return path.join(process.cwd(), "input");
};

const inputFilePath = (day) => {
  const pad = day < 10 ? "0" : "";
  return path.join(inputDirPath(), `day${pad}${day}`);
};

const fetchInput = async (day, year, token) => {
  const url = makeUrl(day, year);
  const path = inputFilePath(day);

  const ensureInputDir = () => {
    const dir = inputDirPath();
    if (!fs.existsSync(dir)) {
      fs.mkdir(dir, (e) => {
        if (e) {
          console.error(e);
          process.exit();
        }
      });
      console.log(` • Created missing ${dir}`);
    }
  };

  try {
    const response = await got(url, {
      headers: { Cookie: `session=${token}` },
    });
    console.log(response.body.trim(), "\n");
    ensureInputDir();
    fs.writeFile(path, response.body, { encoding: "utf8" }, (err) => {
      err ? console.log(err) : console.log(` • Wrote input to ${path}`);
    });
  } catch (error) {
    console.log(`Could not fetch input data from ${url}, got ` + error);
  }
};

const readInputFile = (day) => {
  const path = inputFilePath(day);

  try {
    return fs.readFileSync(path, "utf8");
  } catch {
    console.error(`There's no input in ${path}!`);
    process.exit();
  }
};

module.exports = [getDayAndYear, fetchInput, readInputFile];

