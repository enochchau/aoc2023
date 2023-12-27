const fs = require("fs");
let input = fs.readFileSync("./d1.txt").toString();
const nMap = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};
// let input = `two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen`
let lines = input.split("\n");
let sum = 0;
for (const line of lines) {
  if (line) {
    let match = Array.from(
      line.matchAll(/([0-9]|one|two|three|four|five|six|seven|eight|nine)/g)
    ).map((m) => m[0]);
    if (match) {
      console.log(match);
      let first = match[0];
      if (isNaN(parseInt(first))) {
        first = nMap[first]
      }
      let last = match[match.length - 1];
      if (isNaN(parseInt(last))) {
        last = nMap[last]
      }
      console.log(first, last, typeof first, typeof last, first + last)
      let n = parseInt(first + last);
      sum += n;
    }
  }
}
console.log(sum)
