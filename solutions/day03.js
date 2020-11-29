const up = ([x, y]) => {
  return [x - 1, y];
};
const down = ([x, y]) => {
  return [x + 1, y];
};
const left = ([x, y]) => {
  return [x, y - 1];
};
const right = ([x, y]) => {
  return [x, y + 1];
};
const navigation = {
  "^": up,
  v: down,
  "<": left,
  ">": right,
};

const part1 = (input) => {
  const directions = input.split("");
  let pos = [0, 0];
  let route = { "0,0": ":-(" };

  directions.forEach((d) => {
    route[pos] = ":-)";
    pos = navigation[d](pos);
    route[pos] = ":-)";
  });

  return Object.keys(route).length;
};

const part2 = (input) => {
  const directions = input.split("");
  let current = [0, 0];
  let workers = {
    0: [0, 0],
    1: [0, 0],
  };
  let route = { "0,0": ":-(" };

  directions.forEach((d, i) => {
    route[current] = ":-)";
    current = navigation[d](workers[i % 2]);
    workers[i % 2] = current;
    route[current] = ":-)";
  });

  return Object.keys(route).length;
};

module.exports = [part1, part2];
