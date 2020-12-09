[Advent of Code](https://adventofcode.com/) solutions in JavaScript
for 2015 (but may be used as a JS AoC framework in general).

# Installation & configuration

In the project root, run `npm i .`

Create `.env` file with contents:

    AOC_SESSION=XXXXX
    YEAR=XXXX

Where `AOC_SESSION` is your session cookie (to be found in request
headers for e.g. puzzle input page if you're logged into your AoC
account).

`YEAR` is optional -- if not specified, current year will be used.

## Solutions and tests

There are template files in `solutions` directory for one day
solutions and tests. Copy them adjusting numbers and filling the code.

    solutions
    ├── day00.js
    └── __tests__
        └── day00.test.js

## Commands

### Fetching input

Run `npm run in DAY`, where `DAY` is optional: if is not specified (or
is not a valid number in range 1..25) will default to `1`.

### Running tests

Run `npm test`. To run only new (i.e. not commited) tests, add
`-- -o`; to run only some tests use `-- -t <string>` to be matched
(e.g. "02" to run only tests for day 2).

### Solving a puzzle

Run `npm run out DAY PART`, where both arguments are optional: if
`DAY` is not specified will default to current day or -- if current
day is not in range 1..25 -- to `1`; if `PART` is not `1` or `2`, both
solutions will be run.

# Solutions

1. [Day 1](https://gitlab.com/pkaznowski/aoc-2015-js/-/blob/master/solutions/day01.js)
2. [Day 2](https://gitlab.com/pkaznowski/aoc-2015-js/-/blob/master/solutions/day02.js)
3. [Day 3](https://gitlab.com/pkaznowski/aoc-2015-js/-/blob/master/solutions/day03.js)
4. [Day 4](https://gitlab.com/pkaznowski/aoc-2015-js/-/blob/master/solutions/day04.js)
5. [Day 5](https://gitlab.com/pkaznowski/aoc-2015-js/-/blob/master/solutions/day05.js)
6. [Day 6](https://gitlab.com/pkaznowski/aoc-2015-js/-/blob/master/solutions/day06.js)
7. [Day 7](https://gitlab.com/pkaznowski/aoc-2015-js/-/blob/master/solutions/day07.js)
8. [Day 8](https://gitlab.com/pkaznowski/aoc-2015-js/-/blob/master/solutions/day08.js)
