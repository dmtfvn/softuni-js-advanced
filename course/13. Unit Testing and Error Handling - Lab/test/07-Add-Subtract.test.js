import { expect } from "chai";
import { createCalculator } from "../07-Add-Subtract.js";

describe('Add/Subtract', function () {
  let calc;

  beforeEach(() => {
    calc = createCalculator();
  });

  it('has correct initial value', () => {
    expect(calc.get()).to.equal(0);
  });

  it('can add positive number value', () => {
    calc.add(1);
    expect(calc.get()).to.equal(1);
  });

  it('can add positive string value', () => {
    calc.add('1');
    expect(calc.get()).to.equal(1);
  });

  it('can subtract positive number value', () => {
    calc.subtract(1);
    expect(calc.get()).to.equal(-1);
  });

  it('can subtract positive string value', () => {
    calc.subtract('1');
    expect(calc.get()).to.equal(-1);
  });

  it('can add negative number value', () => {
    calc.add(-1);
    expect(calc.get()).to.equal(-1);
  });

  it('can add negative string value', () => {
    calc.add('-1');
    expect(calc.get()).to.equal(-1);
  });

  it('must have valid type when the value is a number', () => {
    calc.add(1);
    expect(typeof calc.get()).to.equal('number');
  });

  it('must have valid type when the value is a string', () => {
    calc.add('1');
    expect(typeof calc.get()).to.equal('number');
  });
});