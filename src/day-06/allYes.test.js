const allYes = require("./allYes");

describe("all yes", () => {
  it("returns the number of questions for which everyone answered YES", () => {
    expect(allYes(["abcf"])).toEqual(4);
    expect(allYes(["abcf", "bef"])).toEqual(2);
  });
});
