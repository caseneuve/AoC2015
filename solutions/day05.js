const part1 = (input) => {
  const lines = input.trim().split("\n");
  const not = (s) => s.search(/ab|cd|pq|xy/) === -1;
  const threeVowels = (w) => {
    return w.split("").filter((l) => l.match(/[aeiou]/)).length > 2;
  };
  const doubles = (w) => {
    for (let i = 0; i < w.length - 1; i++) {
      if (w[i] == w[i + 1]) {
        return true;
      } else {
        continue;
      }
    }
    return false;
  };

  return lines.filter((l) => not(l) && threeVowels(l) && doubles(l)).length;
};

const part2 = (input) => {
  const lines = input.trim().split("\n");
  const pairs = (w) => {
    for (let i = 0; i < w.length - 2; i++) {
      if (w.slice(i + 2).search(w.slice(i, i + 2)) !== -1) {
        return true;
      } else {
        continue;
      }
    }
    return false;
  };
  const triples = (w) => {
    for (let i = 0; i < w.length - 2; i++) {
      if (w[i] == w[i + 2]) {
        return true;
      } else {
        continue;
      }
    }
    return false;
  };
  return lines.filter((l) => pairs(l) && triples(l)).length;
};

module.exports = [part1, part2];
