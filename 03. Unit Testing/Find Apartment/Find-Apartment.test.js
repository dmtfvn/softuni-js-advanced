import { expect } from "chai";
import { findNewApartment } from "./Find-Apartment.js";

describe('Find New Apartment', function () {
  describe('isGoodLocation', function () {
    it('Different name for city', () => {
      expect(findNewApartment.isGoodLocation('Burgas', true)).to.equal('This location is not suitable for you.');
    });

    it('Boolean === false', () => {
      expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
    });

    it('Conditions not met', () => {
      expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
    });

    it('Invalid input', () => {
      expect(() => findNewApartment.isGoodLocation('a', 'true')).to.throw('Invalid input!');
      expect(() => findNewApartment.isGoodLocation('a', 1)).to.throw('Invalid input!');
      expect(() => findNewApartment.isGoodLocation(false, 'a')).to.throw('Invalid input!');
      expect(() => findNewApartment.isGoodLocation(false, 1)).to.throw('Invalid input!');
    });
  });

  describe('isLargeEnough', function () {
    it('Add the area of apartment', () => {
      expect(findNewApartment.isLargeEnough([10, 30, 40], 20)).to.equal('30, 40');
      expect(findNewApartment.isLargeEnough([40, 50, 60], 40)).to.equal('40, 50, 60');
    });

    it('Invalid input', () => {
      expect(() => findNewApartment.isLargeEnough('[]', '1')).to.throw('Invalid input!');
      expect(() => findNewApartment.isLargeEnough([], 1)).to.throw('Invalid input!');
      expect(() => findNewApartment.isLargeEnough('a', 1)).to.throw('Invalid input!');
      expect(() => findNewApartment.isLargeEnough(['a', 'b'], 'a')).to.throw('Invalid input!');
    });
  });

  describe('isItAffordable', function () {
    it('Budget - Price < 0', () => {
      expect(findNewApartment.isItAffordable(10, 9)).to.equal('You don\'t have enough money for this house!');
    });

    it('Budget - Price = 0', () => {
      expect(findNewApartment.isItAffordable(10, 10)).to.equal('You can afford this home!');
    });

    it('Budget - Price > 0', () => {
      expect(findNewApartment.isItAffordable(10, 11)).to.equal('You can afford this home!');
    });

    it('Invalid input', () => {
      expect(() => findNewApartment.isItAffordable('a', 'b')).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(1, 'a')).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable('a', 1)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(1, -1)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(-1, 1)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(1, 0)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(0, 1)).to.throw('Invalid input!');
    });
  });
});