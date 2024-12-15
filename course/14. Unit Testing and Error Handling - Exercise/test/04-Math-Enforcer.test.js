import { expect } from "chai";
import { mathEnforcer } from "../04-Math-Enforcer.js";

describe('Math Enforcer', function () {
  describe('addFive', function () {
    it('must equal undefined', () => {
      expect(mathEnforcer.addFive('1')).to.be.undefined;
      expect(mathEnforcer.addFive('a')).to.be.undefined;
      expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    });

    it('must add five', () => {
      expect(mathEnforcer.addFive(0)).to.equal(5);
      expect(mathEnforcer.addFive(5)).to.equal(10);
      expect(mathEnforcer.addFive(-5)).to.equal(0);
      expect(mathEnforcer.addFive(-15)).to.equal(-10);
      expect(mathEnforcer.addFive(0.5)).to.be.closeTo(5.5, 0.01);
    });
  });

  describe('subtractTen', function () {
    it('must equal undefined', () => {
      expect(mathEnforcer.subtractTen('1')).to.be.undefined;
      expect(mathEnforcer.subtractTen('a')).to.be.undefined;
      expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    });

    it('must subtract ten', () => {
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
      expect(mathEnforcer.subtractTen(15)).to.equal(5);
      expect(mathEnforcer.subtractTen(5)).to.equal(-5);
      expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
      expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
    });
  });

  describe('sum', function () {
    it('must equal undefined', () => {
      expect(mathEnforcer.sum([1], 1)).to.be.undefined;
      expect(mathEnforcer.sum(1, [])).to.be.undefined;
      expect(mathEnforcer.sum(undefined, 1)).to.be.undefined;
    });

    it('must sum', () => {
      expect(mathEnforcer.sum(1, 2)).to.equal(3);
      expect(mathEnforcer.sum(-1, -2)).to.equal(-3);
      expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01);
      expect(mathEnforcer.sum(-10.5, -20.5)).to.be.closeTo(-31, 0.01);
    });
  });
});