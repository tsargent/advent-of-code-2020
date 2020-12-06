const findRow = require("./findRow");
const findCol = require("./findCol");

module.exports = function findSeat(str) {
  const rowStr = str.slice(0, 7);
  const colStr = str.slice(7);
  const row = findRow(rowStr);
  const col = findCol(colStr);
  return row * 8 + col;
};
