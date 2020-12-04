const fs = require('fs');
const data = fs.readFileSync('./input.txt');
const dataString = data.toString().trim();
const arr = dataString.split('\n').map((line) => line.split(''));
let treeCount = 0;
const columns = arr[0].length;
for (let i = 0; i < arr.length; i++) {
  const col = (i * 3) % columns;
  const isTree = arr[i][col] === '#';
  isTree && treeCount++;
}

console.log(treeCount);
