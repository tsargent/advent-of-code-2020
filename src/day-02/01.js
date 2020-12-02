const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  let lines = data.split('\n');
  const arr = [];
  let validCount = 0;
  lines.forEach((line) => {
    if (line) {
      const parts = line.split(':');
      const rule = parts[0].trim();
      const str = parts[1].trim();
      isValid(rule, str) && validCount++;
    }
  });
  console.log(validCount);
});

function isValid(rule, str) {
  const ruleRange = rule.split(' ')[0].split('-').map((str => Number(str)));
  const ruleValue = rule.split(' ')[1];
  const occurances = str.split('').filter((char) => char === ruleValue).length;
  const valid = occurances >= ruleRange[0] && occurances <= ruleRange[1];

  return valid;
}
