import { expect } from "chai";
import { motorcycleRider } from "./Motorcycle-Rider.js";

describe('Motorcycle Rider', function () {
  describe('licenseRestriction', function () {
    it('category AM', () => {
      expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
    });

    it('category A1', () => {
      expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
    });

    it('category A2', () => {
      expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
    });

    it('category A', () => {
      expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
    });

    it('Invalid input', () => {
      expect(() => motorcycleRider.licenseRestriction('aa')).to.throw('nvalid Information!');
    });
  });

  describe('motorcycleShowroom', function () {
    it('Matching criteria - 3', () => {
      expect(motorcycleRider.motorcycleShowroom([125, 250, 600], 600)).to.equal('There are 3 available motorcycles matching your criteria!');
    });

    it('Matching criteria - 2', () => {
      expect(motorcycleRider.motorcycleShowroom([125, 250, 750], 250)).to.equal('There are 2 available motorcycles matching your criteria!');
    });

    it('Matching criteria - 1', () => {
      expect(motorcycleRider.motorcycleShowroom([125, 250, 750], 125)).to.equal('There are 1 available motorcycles matching your criteria!');
    });

    it('Matching criteria - 0', () => {
      expect(motorcycleRider.motorcycleShowroom([250, 600, 750], 125)).to.equal('There are 0 available motorcycles matching your criteria!');
    });

    it('Invalid input', () => {
      expect(() => motorcycleRider.motorcycleShowroom('a', true)).to.throw('Invalid Information!');
      expect(() => motorcycleRider.motorcycleShowroom([], 49)).to.throw('Invalid Information!');
    });
  });

  describe('otherSpendings', function () {
    it('Equipment and consumables w discount', () => {
      const eq = [200, 300];
      const con = [70, 30];

      const totalPrice = (eq[0] + con[1]) * 0.9;

      expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], true)).to.equal(`You spend $${totalPrice.toFixed(2)} for equipment and consumables with 10% discount!`);
    });

    it('Equipment and consumables w/o discount', () => {
      const eq = [200, 300];
      const con = [70, 30];

      const totalPrice = (eq[1] + con[0]);

      expect(motorcycleRider.otherSpendings(['jacked'], ['engine oil'], false)).to.equal(`You spend $${totalPrice.toFixed(2)} for equipment and consumables!`);
    });

    it('Invalid input', () => {
      expect(() => motorcycleRider.otherSpendings({}, [], true)).to.throw('Invalid Information!');
      expect(() => motorcycleRider.otherSpendings([], {}, false)).to.throw('Invalid Information!');
      expect(() => motorcycleRider.otherSpendings([], [], 'a')).to.throw('Invalid Information!');
    });
  });
});