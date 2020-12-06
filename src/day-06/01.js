const allYes = require("./allYes");
const fs = require("fs");
const data = fs.readFileSync("./input.txt");
const dataString = data.toString().trim();

const results = dataString.split("\n\n");

// get total "yes" for each group
const totalYes = results.map((group) => {
  const line = group.replace(/(\r\n|\n|\r)/gm, "");
  const uniqueOnly = new Set(line);
  return [...uniqueOnly].length;
});

// get the sum
const sum = totalYes.reduce((a, c) => a + c, 0);

console.group("part 1");
console.log(sum);
console.groupEnd();

const total = results.reduce((sum, result) => {
  const people = result.split("\n");
  const groupTotal = allYes(people);
  return sum + groupTotal;
}, 0);

console.group("part 2");
console.log(total);
console.groupEnd();
