const chai = require('chai');
const rewire = require("rewire");

const isNumberEven = rewire('./index.js');

const expect = chai.expect;

describe('isNumberEven test', () => {
    it('Should return false when odd no is passed', () => {
        expect(isNumberEven(3)).to.equals(false);
    });

    it('Should return true when even no is passed', () => {
        expect(isNumberEven(2)).to.equals(true);
    });
})