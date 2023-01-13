const [part1] = require("../day07");

describe("day 07", () => {
  const input = `\
123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`;
  describe("part 1", () => {
    it.each([
      ["d", 72],
      ["f", 492],
      ["g", 114],
      ["h", 65412],
      ["i", 65079],
      ["x", 123],
      ["y", 456],
    ])("%s: %i", (gt, r) => {
      expect(part1(input, null, gt)).toBe(r);
    });
  });
});
