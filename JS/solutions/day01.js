const h = require("../tools/helpers")

const part1 = (input) => {
  return [...input].map((c) => (c == "(" ? 1 : -1)).reduce(h.add);
};

const part2 = (input) => {
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    let c = input.charAt(i) == "(" ? 1 : -1;
    floor += c;
    if (floor < 0) { return i + 1; }
  }
};

module.exports = [part1, part2];
