const fs = require("fs");
const data = fs.readFileSync("./input.txt");
const dataString = data.toString().trim();
const arr = dataString.split("\n").map((line) => line.split(""));
const columns = arr[0].length;

function countTrees(right, down) {
  let treeCount = 0;
  for (let i = 0; i < arr.length / down; i++) {
    const col = (i * right) % columns;
    const row = i * down;
    const isTree = arr[row][col] === "#";
    isTree && treeCount++;
  }
  return treeCount;
}

const answ1 = countTrees(1, 1);
const answ2 = countTrees(3, 1);
const answ3 = countTrees(5, 1);
const answ4 = countTrees(7, 1);
const answ5 = countTrees(1, 2);

console.log(answ1 * answ2 * answ3 * answ4 * answ5);
