import { expect } from "chai";
import { lookupChar } from "../03-Char-Lookup.js";

describe('Lookup char index of string', function () {
  describe('Happy path', function () {
    it('must return correct char at given index', () => {
      expect(lookupChar('123', 0)).to.equal('1');
      expect(lookupChar('abc', 1)).to.equal('b');
      expect(lookupChar('ab-', 2)).to.equal('-');
    });
  });

  describe('Edge cases', function () {
    it('must have valid index', () => {
      expect(lookupChar('test', 4)).to.equal('Incorrect index');
      expect(lookupChar('string-length', 15)).to.equal('Incorrect index');
      expect(lookupChar('1', -1)).to.equal('Incorrect index');
    });
  });

  describe('Validation', function () {
    it('must not be undefined', () => {
      expect(lookupChar(1, 1)).to.be.undefined;
      expect(lookupChar(1, true)).to.be.undefined;
      expect(lookupChar(false, '1')).to.be.undefined;
      expect(lookupChar('a', 'b')).to.be.undefined;
      expect(lookupChar('a', 1.1)).to.be.undefined;
    });
  });

  describe('Test Overload', function () {
    it('must return correct char when sting have empty space', () => {
      expect(lookupChar('.  ', 0)).to.equal('.');
      expect(lookupChar('a b', 1)).to.equal(' ');
    });
  });
});