const h = require("../tools/helpers");

const part1 = (input) =>
  h
    .asLines(input)
    .map((l) => l.length - eval(l).length)
    .reduce(h.add);

const part2 = (input) => 
  h
    .asLines(input)
    .map((l) => {
      let [bs, qu] = [l.match(/\\/g), l.match(/"/g)];
      return (bs ? bs.length - (qu.length - 2) : 0) + 2 * qu.length;
    })
    .reduce(h.add);

module.exports = [part1, part2];
