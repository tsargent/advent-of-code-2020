const fs = require("fs");
const data = fs.readFileSync("./input.txt");
const dataString = data.toString().trim();

const dataLines = dataString.split("\n");

const bagColors = new Set();
dataLines.forEach((line) => {
  const [key] = line.split("contain");
  bagColors.add(key);
  if (key.includes("gold")) {
    // console.log(key);
  }
});

function makeValue(str) {
  const sliceIndex = str.indexOf(" ");
  const num = Number(str.slice(0, sliceIndex));
  const val = str.slice(sliceIndex).trim().replace(" ", "-");
  return {
    [val]: num,
  };
}

const masterObject = dataLines.reduce((acc, line) => {
  const regex = /(bags|bag)/gi;
  line = line.replace(regex, "");
  line = line.replace(".", "");
  let [key, val] = line.split("contain");
  key = key.replace("bags", "").trim().replace(/\s+/g, "-");
  vals = val
    .replace(".", "")
    .split(",")
    .map((el) => el.trim());
  vals = vals.reduce((acc, el) => ({ ...acc, ...makeValue(el) }), {});

  return {
    ...acc,
    [key]: vals,
  };
}, {});

function findAllParents(obj, children) {
  var needles = children;
  var visited = {};
  var found = true;
  while (found) {
    var count = 0;
    for (let i = 0; i < needles.length; i++) {
      for (key in obj) {
        if (needles[i] in obj[key]) {
          visited[key] = true;
          count++;
          delete obj[key];
        }
      }
      needles = Object.keys(visited);
    }
    if (count === 0) {
      found = false;
    }
  }
  return Object.keys(visited).length;
}

console.log(findAllParents(masterObject, ["shiny-gold"]));
// console.log(findAllParents(masterObject, ['fake-color']));
// // 1 get the bags that directly contain shiny gold bags
// const parents = new Set();

// for (key in masterObject) {
//   if ('shiny-gold' in masterObject[key]) {
//     parents.add(key);
//   }
// }

// console.log('These bags directly contain shiny gold:');
// console.log(parents);
// // console.log(dataLines.length);
// // console.log([...bagColors].length)

// const grandParents = new Set();

// parents.forEach((el) => {
//   console.log(el)

// })
