// Parsing input
exports.onlyNums = (s) => {
  return s
    .trim()
    .split(/\n/)
    .map((l) => l.split(/\D/).map((n) => parseInt(n, 10)));
};

// Basic arithetic operations and comparisons
const _sub = (a, b) => {
  return a - b;
};

exports.add = (a, b) => {
  return a + b;
};
exports.sub = _sub;
exports.mul = (a, b) => {
  return a * b;
};
exports.lt = _sub;
exports.gt = (a, b) => {
  return b - a;
};
