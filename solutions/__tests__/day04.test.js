const [part1, ] = require("../day04");

describe("day 04", () => {
  describe.skip("part 1", () => {
    it.each([
      ["abcdef", 609043],
      ["pqrstuv", 1048970],
    ])("%s should be %i", (d, r) => {
      expect(part1(d)).toBe(r);
    });
  });
});
