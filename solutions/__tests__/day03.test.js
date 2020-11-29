const [part1, part2] = require("../day03");

describe("day 03", () => {
  describe("part 1", () => {
    it.each([
      [">", 2],
      ["^>v<", 4],
      ["^v^v^v^v^v", 2],
    ])("%s should be %i", (d, r) => {
      expect(part1(d)).toBe(r);
    });
  });
  describe("part 2", () => {
    it.each([
      ["^v", 3],
      ["^>v<", 3],
      ["^v^v^v^v^v", 11],
    ])("%s should be %i", (d, r) => {
      expect(part2(d)).toBe(r);
    });
  });
});
