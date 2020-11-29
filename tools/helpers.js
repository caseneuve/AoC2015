// Parsing input
exports.onlyNums = (s) => {
  return s
    .split(/\n/)
    .filter((l) => l.length !== 0)
    .map((l) => l.split(/\D/).map((n) => parseInt(n, 10)));
};

// Basic arithetic operations and comparisons
const _sub = (a, b) => a - b;
exports.add = (a, b) => a + b;
exports.sub = _sub;
exports.mul = (a, b) => a * b;
exports.lt = _sub;
exports.gt = (a, b) => b - a;
