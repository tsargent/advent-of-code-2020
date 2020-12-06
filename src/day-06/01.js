const fs = require("fs");
const data = fs.readFileSync("./input.txt");
const dataString = data.toString().trim();

// get total "yes" for each group
const results = dataString.split("\n\n").map((group) => {
  const line = group.replace(/(\r\n|\n|\r)/gm, "");
  const uniqueOnly = new Set(line);
  return [...uniqueOnly].length;
});

// get the sum
const sum = results.reduce((a, c) => a + c, 0);

console.log(sum);
