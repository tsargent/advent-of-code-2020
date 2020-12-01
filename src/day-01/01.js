const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  let lines = data.split('\n');
  const arr = [];
  lines.forEach((line) => {
    line && arr.push(Number(line));      
  });
  console.log(findIt2(arr));
  console.log(findIt3(arr));
});

// part 1
function findIt2(arr) {
  let entry1, entry2;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 2020) {
        entry1 = arr[i];
        entry2 = arr[j];
      }
    }
  }
  if (entry1 && entry2) {
    return entry1 * entry2;
  }
  return false;
}

// part 2
function findIt3(arr) {
  let entry1, entry2, entry3;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      for (k = 0; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 2020) {
          entry1 = arr[i];
          entry2 = arr[j];
          entry3 = arr[k];
        }
      }
    }
  }
  if (entry1 && entry2 && entry3) {
    return entry1 * entry2 * entry3;
  }
  return false;
}
