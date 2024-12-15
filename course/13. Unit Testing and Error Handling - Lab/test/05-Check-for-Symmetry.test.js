import { expect } from "chai";
import { isSymmetric } from "../05-Check-for-Symmetry.js";

describe('Check symmetry', function () {
  describe('Happy path', function () {
    it('must be symmetric with numbers - odd', () => {
      expect(isSymmetric([1, 2, 1])).to.be.true;
      expect(isSymmetric([1])).to.be.true;
    });

    it('must be symmetric with numbers - even', () => {
      expect(isSymmetric([1, 2, 2, 1])).to.be.true;
      expect(isSymmetric([1, 1])).to.be.true;
    });
  });

  describe('Edge cases', function () {
    it('must return empty arrar', () => {
      expect(() => isSymmetric([])).to.have.lengthOf(0);
    });

    it('must return false for diff elements', () => {
      expect(isSymmetric([1, '1'])).to.be.false;
    });

    it('must not be an object', () => {
      expect(isSymmetric({})).to.be.false;
    });
  });

  describe('Validation', function () {
    it('must be an array - 1', () => {
      expect(isSymmetric('abc')).to.be.false;
    });

    it('must be an array - 2', () => {
      expect(isSymmetric('aba')).to.be.false;
    });

    it('must be an array - 3', () => {
      expect(isSymmetric('aa')).to.be.false;
    });
  });

  describe('Test Overload', function () {
    it('is symmetric with strings - odd', () => {
      expect(isSymmetric(['a', 'b', 'c', 'b', 'a'])).to.be.true;
    });

    it('is symmetric with strings - even', () => {
      expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('is symmetric with a string - odd', () => {
      expect(isSymmetric(['abcba'])).to.be.true;
    });

    it('is symmetric with a string - even', () => {
      expect(isSymmetric(['abba'])).to.be.true;
    });

    it('is not symmetric with strings - odd', () => {
      expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    });

    it('is not symmetric with strings - even', () => {
      expect(isSymmetric(['a', 'b'])).to.be.false;
    });

    it('is not symmetric with strings - lower & upper', () => {
      expect(isSymmetric(['a', 'A'])).to.be.false;
    });
  });
});