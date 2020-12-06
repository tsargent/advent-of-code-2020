module.exports = function findRow(str) {
  const rowInstructions = str.split("");
  const totalRows = 128;
  let lowerBound = 0;
  let upperBound = totalRows - 1;
  let row;
  for (let i = 0; i < rowInstructions.length; i++) {
    const letter = rowInstructions[i];
    const diff = upperBound - lowerBound;
    if (letter === "F") {
      upperBound = Math.floor(upperBound - diff / 2);
    }

    if (letter === "B") {
      lowerBound = Math.ceil(lowerBound + diff / 2);
    }

    if (i === rowInstructions.length - 1) {
      if (letter === "F") {
        row = lowerBound;
      } else {
        row = upperBound;
      }
    }
  }

  return row;
};
