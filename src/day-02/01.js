const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  let lines = data.split('\n');
  const arr = [];
  let validCount = 0;
  let validCount2 = 0;
  lines.forEach((line) => {
    if (line) {
      const parts = line.split(':');
      const rule = parts[0].trim();
      const str = parts[1].trim();
      isValid(rule, str) && validCount++;
      isValid2(rule, str) && validCount2++;
    }
  });
  console.log(validCount);
  console.log(validCount2);
});

function isValid(rule, str) {
  const ruleRange = rule.split(' ')[0].split('-').map((str => Number(str)));
  const ruleValue = rule.split(' ')[1];
  const occurances = str.split('').filter((char) => char === ruleValue).length;
  const valid = occurances >= ruleRange[0] && occurances <= ruleRange[1];

  return valid;
}

function isValid2(rule, str) {
  const [pos1, pos2] = rule.split(' ')[0].split('-').map((str => Number(str)));
  const ruleValue = rule.split(' ')[1];

  if (str[pos1 - 1] === ruleValue && str[pos2 - 1] === ruleValue) {
    return false;
  }

  if (str[pos1 - 1] !== ruleValue && str[pos2 - 1] !== ruleValue) {
    return false;
  }

  return true;
}
