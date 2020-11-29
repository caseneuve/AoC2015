const [part1, part2] = require("../day01");

describe("day 1", () => {
  describe("part 1", () => {
    it.each(["(())", "()()"])("%s should be 0", (p) => {
      expect(part1(p)).toBe(0);
    });
    it.each(["(((", "(()(()(", "))((((("])("%s should be 3", (p) => {
      expect(part1(p)).toBe(3);
    });
    it.each(["())", "))("])("%s should be -1", (p) => {
      expect(part1(p)).toBe(-1);
    });
    it.each([")))", ")())())"])("%s should be -3", (p) => {
      expect(part1(p)).toBe(-3);
    });
  });
  describe("part 2", () => {
    it.each([
      [")", 1],
      ["()())()", 5],
    ])("%s should be %i", (p, r) => {
      expect(part2(p)).toBe(r);
    });
  });
});
