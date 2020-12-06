const fs = require('fs');
const findSeat = require("./findSeat");
const data = fs.readFileSync('./input.txt');
const dataString = data.toString();

const seats = dataString.split('\n').map((line) => {
    return findSeat(line);
});


console.log(Math.max(...seats));