// test template

const [part1, part2] = require("../dayXXX");

describe("day XXX", () => {
  describe("part 1", () => {
    // enter data into empty array, and change 0 to relevant value
    it.each([])("%s should be XXX", (d) => {
      expect(part1(d)).toBe(0);
    });
  });
  describe("part 2", () => {
    // or with pairs: [data, expected]
    it.each([[], []])("%s should be %i", (d, r) => {
      expect(part2(d)).toBe(r);
    });
  });
});
