import { expect } from "chai";
import { isOddOrEven } from "../02-Even-Or-Odd.js";

describe('Even or Odd string', function () {
  describe('Happy path', function () {
    it('must not be undefined', () => {
      expect(isOddOrEven(1)).to.be.undefined;
      expect(isOddOrEven(['aa'])).to.be.undefined;
      expect(isOddOrEven({ name: 'John' })).to.be.undefined;
    });

    it('must have an odd length', () => {
      expect(isOddOrEven('aa')).to.equal('even');
      expect(isOddOrEven('01')).to.equal('even');
    });

    it('must have an even length', () => {
      expect(isOddOrEven('aaa')).to.equal('odd');
      expect(isOddOrEven('123')).to.equal('odd');
    });
  });

  describe('Edge cases', function () {
    it('must be a string if an empty string is passed', () => {
      expect(typeof isOddOrEven('')).to.equal('string');
    });
  });

  describe('Validation', function () {
    it('must be of type - string', () => {
      expect(typeof isOddOrEven('a')).to.equal('string');
      expect(typeof isOddOrEven('1')).to.equal('string');
    });
  });

  describe('Test Overload', function () {
    it('must be a string of diff character', () => {
      expect(typeof isOddOrEven('a1')).to.equal('string');
      expect(typeof isOddOrEven('a 1 true')).to.equal('string');
    })
  });
});