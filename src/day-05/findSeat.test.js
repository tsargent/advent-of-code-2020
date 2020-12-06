const findRow = require("./findRow");
const findCol = require("./findCol");
const findSeat = require("./findSeat");

describe('find seat', () => {
    describe('find row', () => {
        it('returns the row', () => {
            expect(findRow('FBFBBFF')).toEqual(44);
        });    
    });

    describe('find col', () => {
        it('returns the col', () => {
            expect(findCol('RLR')).toEqual(5);
        });    
    });

    describe('find seat', () => {
        it('returns the seat id', () => {
            expect(findSeat('FBFBBFFRLR')).toEqual(357);
        });
    });
});