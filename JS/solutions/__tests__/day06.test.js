const [part1, part2] = require("../day06");

describe("day 06", () => {
  describe("part 1", () => {
    it.each([
      ["toggle 0,0 through 999,0", 1000],
      ["turn on 499,499 through 500,500", 4],
    ])("%s should be %s", (d, r) => {
      expect(part1(d)).toBe(r);
    });
  });
  describe("part 2", () => {
    it.each([
      ["turn on 0,0 through 0,0", 1],
      ["toggle 0,0 through 999,999", 2000000],
    ])("%s should be %s", (d, r) => {
      expect(part2(d)).toBe(r);
    });
  });
});
