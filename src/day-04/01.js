const fs = require("fs");
const data = fs.readFileSync("./input.txt");
const dataString = data.toString().trim();

let validCount = 0;

const passports = dataString.split("\n\n").map((passport, i) => {
  const trimmed = passport.replace(/\r?\n|\r/g, " ").trim();
  const passportFields = trimmed.split(" ").reduce((acc, curr) => {
    const [key, value] = curr.split(":");
    return {
      ...acc,
      [key]: value,
    };
  }, {});
  isValid(passportFields) && validCount++;
});

function isValid(fields) {
  const keys = Object.keys(fields);
  if (keys.length < 7 && !fields["cid"]) {
    return false;
  }
  if (keys.length < 8 && fields["cid"]) {
    return false;
  }

  if (!isValidBirthYear(fields["byr"])) return false;
  if (!isValidIssueYear(fields["iyr"])) return false;
  if (!isValidExpirationYear(fields["eyr"])) return false;
  if (!isValidHeight(fields["hgt"])) return false;
  if (!isValidHairColor(fields["hcl"])) return false;
  if (!isValidEyeColor(fields["ecl"])) return false;
  if (!isValidPassportID(fields["pid"])) return false;

  return true;
}

function isValidBirthYear(data) {
  if (data.length !== 4) return false;
  const yearNum = Number(data);
  if (yearNum >= 1920 && yearNum <= 2002) {
    return true;
  }
  return false;
}

function isValidIssueYear(data) {
  if (data.length !== 4) return false;
  const yearNum = Number(data);
  if (yearNum >= 2010 && yearNum <= 2020) {
    return true;
  }
  return false;
}

function isValidExpirationYear(data) {
  if (data.length !== 4) return false;
  const yearNum = Number(data);
  if (yearNum >= 2020 && yearNum <= 2030) {
    return true;
  }
  return false;
}

function isValidHeight(data) {
  if (data.includes("in")) {
    const val = Number(data.replace("in", ""));
    return val >= 59 && val <= 76;
  }
  if (data.includes("cm")) {
    const val = Number(data.replace("cm", ""));
    return val >= 150 && val <= 193;
  }
  return false;
}

function isValidHairColor(data) {
  return /^#[0-9A-F]{6}$/i.test(data);
}

function isValidEyeColor(data) {
  const pattern = new RegExp("amb|blu|brn|gry|grn|hzl|oth");
  return pattern.test(data);
}

function isValidPassportID(data) {
  if (data.length !== 9) return false;
  const pattern = new RegExp(/^[0-9]*$/);
  return pattern.test(data);
}

console.log(validCount);
