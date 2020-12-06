const h = require("../tools/helpers");

const MAX = 65535;
const OPS = {
  AND: (a, b) => a & b,
  LSHIFT: (a, b) => a << b,
  NOT: (a) => ~a,
  OR: (a, b) => a | b,
  RSHIFT: (a, b) => a >> b,
  null: (a) => a,
};

class GG {
  constructor(gt, oo, b = null) {
    const [aa, op] = [oo.match(/[a-z0-9]+/g), oo.match(/[^a-z0-9]+/g)];
    this.gt = gt; // gate name
    this.op = op ? op[0].trim() : null; // operation
    this.aa = [...aa]; // args
    this.nn = new Set(aa.filter((e) => isNaN(e))); // needs
    this.vv = // value
      this.nn.size == 0 ? (b && gt == "b" ? b : parseInt(oo, 10)) : null;
  }

  update(ww) {
    let vv = this.aa.map((v) => {
      if (isNaN(v)) return ww[v].vv;
      return v;
    });
    const r = OPS[this.op](...vv) % MAX;
    if (r >= 0) this.vv = r;
    else this.vv = MAX + 1 + r;
  }
}

const ss = (ii, b = null, gt = "a") => {
  let ww = h.asLines(ii).reduce((ob, i) => {
    const [oo, gt] = i.split(" -> ");
    ob[gt] = new GG(gt, oo, b);
    return ob;
  }, {});

  let qu = Object.keys(ww);

  while (qu.length) {
    let gg = qu.shift();
    if (ww[gg].vv) continue;
    ww[gg].nn.forEach((e) => (ww[e].vv != null ? ww[gg].nn.delete(e) : e));
    if (ww[gg].nn.size == 0) ww[gg].update(ww);
    else qu.push(gg);
  }

  return ww[gt].vv;
};

const part1 = (input, b = null, gt = "a") => ss(input, b, gt); // additional args for tests sake
const part2 = (input, b = 3176, gt = "a") => ss(input, b, gt);

module.exports = [part1, part2];
