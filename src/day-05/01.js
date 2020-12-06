const fs = require('fs');
const findSeat = require("./findSeat");
const findMissing = require('./findMissing');
const data = fs.readFileSync('./input.txt');
const dataString = data.toString();

// get all seat IDs
const seats = dataString.split('\n').map((line) => findSeat(line));

// find the highest ID (part 1)
console.log(Math.max(...seats));

// find the missing seat (part 2)
console.log(findMissing(seats));
