const h = require("../tools/helpers");

const part1 = (input) => {
  let dimensions = h.asArrayNums(input);

  const area = (dims) => {
    dims.sort(h.sub);
    const [a, b, c] = dims;
    const box = [a * b, a * c, b * c].map((n) => 2 * n).reduce(h.add);
    return box + a * b;
  };

  return dimensions.map(area).reduce(h.add);
};

const part2 = (input) => {
  let dimensions = h.asArrayNums(input);

  const ribbon = (dims) => {
    dims.sort(h.sub);
    return [2 * dims[0], 2 * dims[1]].reduce(h.add) + dims.reduce(h.mul);
  };

  return dimensions.map(ribbon).reduce(h.add);
};

module.exports = [part1, part2];
