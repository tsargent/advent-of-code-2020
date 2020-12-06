const findRow = require("./findRow");
const findCol = require("./findCol");
const findSeat = require("./findSeat");
const findMissing = require("./findMissing");

describe("find seat", () => {
  describe("find row", () => {
    it("returns the row", () => {
      expect(findRow("FBFBBFF")).toEqual(44);
    });
  });

  describe("find col", () => {
    it("returns the col", () => {
      expect(findCol("RLR")).toEqual(5);
    });
  });

  describe("find seat", () => {
    it("returns the seat id", () => {
      expect(findSeat("FBFBBFFRLR")).toEqual(357);
    });
  });

  describe("findMissing", () => {
    it("finds the missing number in consecutive array", () => {
      expect(findMissing([5, 3, 6, 4, 1])).toEqual(2);
    });
  });
});
