const fs = require('fs');
const data = fs.readFileSync('./input.txt');
const dataString = data.toString().trim();

let validCount = 0;

const passports = dataString.split('\n\n').map((passport, i) => {
  const trimmed = passport.replace(/\r?\n|\r/g, " ").trim();
  const passportFields = trimmed.split(' ').reduce((acc, curr) => {
    const [key, value] = curr.split(':');
    return {
      ...acc,
      [key]: value,
    }
  }, {})
  isValid(passportFields) && validCount++;
})

function isValid(fields) {
  const keys = Object.keys(fields);
  if (keys.length === 8) return true;
  if (keys.length === 7 && !fields['cid']) {
    return true;
  }
  return false;
}

console.log(validCount);
