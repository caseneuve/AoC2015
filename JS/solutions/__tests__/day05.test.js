const [part1, part2] = require("../day05");

describe("day 05", () => {
  describe("part 1", () => {
    it.each([
      // using unary operators to check directly part function
      ["ugknbfddgicrmopn", +true],
      ["aaa", +true],
      ["jchzalrnumimnmhp", +false],
      ["haegwjzuvuyypxyu", +false],
      ["dvszwmarrgswjxmb", +false],
    ])("%s should be %s", (d, r) => {
      expect(part1(d)).toBe(r);
    });
  });
  describe("part 2", () => {
    it.each([
      ["qjhvhtzxzqqjkmpb", +true],
      ["xxyxx", +true],
      ["uurcxstgmygtbstg", +false],
      ["ieodomkazucvgmuy", +false],
      ["dvszwmarrgswjxmb", +false],
    ])("%s should be %s", (d, r) => {
      expect(part2(d)).toBe(r);
    });
  });
});
