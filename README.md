[Advent of Code](https://adventofcode.com/) solutions in JavaScript
for 2020.

# Installation & configuration

In the project root, run `npm i .`

Create `.env` file with contents:

    AOC_SESSION=XXXXX
    YEAR=XXXX

Where `AOC_SESSION` is your session cookie (to be found in request
headers for e.g. puzzle input page if you're logged into your AoC
account).

`YEAR` is optional -- if not specified, current year will be used.

# Solutions and tests

There are template files in `solutions` directory for one day
solutions and tests. Copy them adjusting numbers and filling the code.

    solutions
    ├── day00.js
    └── __tests__
        └── day00.test.js

# Commands

## Fetching input

Run `npm run in DAY`, where `DAY` is optional: if is not specified (or
is not a valid number in range 1..25) will default to `1`.

## Running tests

Run `npm run tests`

## Running solution

Run `npm run out DAY PART`, where both arguments are optional: if
`DAY` is not specified will default to current day or -- if current
day is not in range 1..25 -- to `1`; if `PART` is not `1` or `2`, both
solutions will be run.
