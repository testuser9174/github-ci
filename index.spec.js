const chai = require('chai');
const rewire = require("rewire");

const { isNumberEven, addNumbers } = rewire('./index.js');

const expect = chai.expect;

describe('isNumberEven test', () => {
    it('Should return false when odd no is passed', () => {
        expect(isNumberEven(3)).to.equals(false);
    });

    it('Should return true when even no is passed', () => {
        expect(isNumberEven(2)).to.equals(true);
    });
})


describe('addNumbers test', () => {
    it('should throw error if numbers are not passed', () => {
        try {
            addNumbers(3);
        } catch (err) {
            expect(err.message).to.equals('Enter the numbers to add');
        }
    })
    it('should throw error if string is passed', () => {
        try {
            addNumbers('d', 3)
        } catch (err) {
            expect(err.message).to.equals('Enter valid number');
        }
    })
    it('Should return sum of numbers', () => {
        expect(addNumbers(11, 7)).to.equals(18);
    })
})