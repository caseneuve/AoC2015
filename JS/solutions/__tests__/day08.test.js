const [part1, part2] = require("../day08");

describe("day 08", () => {
  const i = String.raw`""
"abc"
"aaa\"aaa"
"\x27"`;

  describe("part 1", () => { it("", () => { expect(part1(i)).toBe(12); }); });
  describe("part 2", () => { it("", () => { expect(part2(i)).toBe(19); }); });
});
