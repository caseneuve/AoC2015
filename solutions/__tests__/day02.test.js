const [part1, part2] = require("../day02");

describe("day 2", () => {
  describe("part 1", () => {
    it.each([
      ["2x3x4", 58],
      ["1x1x10", 43],
    ])("%s should be %i", (d, r) => {
      expect(part1(d)).toBe(r);
    });
  });
  describe("part 2", () => {
    it.each([
      ["2x3x4", 34],
      ["1x1x10", 14],
    ])("%s should be %i", (d, r) => {
      expect(part2(d)).toBe(r);
    });
  });
});
