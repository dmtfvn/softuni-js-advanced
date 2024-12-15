import { expect } from "chai";
import { sum } from "../04-Sum-of-Numbers.js";

describe('Sum Numbers', function () {
  describe('Happy path', function () {
    it('works with numbers', () => {
      expect(sum([1, 1])).to.equal(2);
      expect(sum([1, 0])).to.equal(1);
    });

    it('works with more numbers', () => {
      expect(sum([1, 1, 1])).to.equal(3);
      expect(sum([1, 0, 1])).to.equal(2);
    });
  });

  describe('Edge cases', function () {
    it('returns 0 for empty arrar', () => {
      expect(sum([])).to.equal(0);
    });
  });

  describe('Validation', function () {
    it('does not work with strings', () => {
      expect(sum(['aaa'])).to.be.NaN;
    });
  });

  describe('Test Overload', function () {
    it('works with lots of numbers', () => {
      expect(sum([10, 20, 30, 40, 50])).to.equal(150);
    });

    it('sums negative numbers', () => {
      expect(sum([-1, -2, -3])).to.equal(-6);
    });
  });
});