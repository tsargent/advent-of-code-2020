module.exports = function (arr) {
  // n = arr.length
  // count the number of characters that appear n times in the group

  const peopleCount = arr.length;
  if (arr.length === 1) {
    return arr[0].length;
  }

  // the master string of all yes answers for all people in the group
  const masterString = arr.join("").split("").sort().join("");

  // we need to check if each of these characters appears n times in the master string
  const stringSet = new Set(masterString.split(""));
  const total = [...stringSet].reduce((sum, letter) => {
    if (masterString.split(letter).length - 1 === peopleCount) {
      return sum + 1;
    } else {
      return sum;
    }
  }, 0);
  return total;
};
