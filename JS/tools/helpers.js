// Basic arithetic operations and comparisons
const _sub = (a, b) => a - b;

exports.add = (a, b) => a + b;
exports.sub = _sub;
exports.mul = (a, b) => a * b;
exports.lt = _sub;
exports.gt = (a, b) => b - a;

// Parsing input
const lines = (i) => {
  return i.split(/\n/).filter((l) => l.length !== 0);
};
const linesNums = (i) => {
  return lines(i).map((ch) => parseInt(ch, 10));
};
const linesNumsSorted = (i) => {
  let nums = linesNums(i);
  nums.sort(_sub);
  return nums;
};
const arrayNums = (i) => {
  return lines(i).map((l) => l.split(/\D/).map((n) => parseInt(n, 10)));
};

exports.asLines = lines;
exports.asNums = linesNums;
exports.asNumsSorted = linesNumsSorted;
exports.asArrayNums = arrayNums;

