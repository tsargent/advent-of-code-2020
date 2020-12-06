// find the missing number in an array of consecutive integers
module.exports = function findMissing(arr) {
  const sorted = arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (sorted[i - 1] !== sorted[i] - 1) {
      return sorted[i] - 1;
    }
  }
  return false;
};
