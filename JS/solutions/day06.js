const h = require("../tools/helpers");

const ii = (input) => {
  return h
    .asLines(input)
    .map((l) =>
      l.match(/(toggle|turn (on|off)) (\d+),(\d+)\D+(\d+),(\d+)/).slice(2)
    );
};

const ss = (ii, gg, rr) => {
  for ([cc, fx, fy, tx, ty] of ii) {
    for (let i = fx; ; i++) {
      for (let k = fy; ; k++) {
        gg[[i, k]] = rr[cc](gg[[i, k]]);
        if (k == ty) break;
      }
      if (i == tx) break;
    }
  }
  return Object.values(gg).reduce((a, b) => a + b);
};

const part1 = (input) => {
  let rr = { undefined: (v) => (v === 1 ? 0 : 1), on: (_) => 1, off: (_) => 0 };
  return ss(ii(input), {}, rr);
};

const part2 = (input) => {
  let gg = new Proxy({}, { get: (t, n) => (n in t ? t[n] : 0) });
  let rr = {
    undefined: (v) => v + 2,
    on: (v) => v + 1,
    off: (v) => (v > 0 ? v - 1 : 0),
  };
  return ss(ii(input), gg, rr);
};

module.exports = [part1, part2];
