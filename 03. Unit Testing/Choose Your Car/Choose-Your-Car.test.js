import { expect } from "chai";
import { chooseYourCar } from "./Choose-Your-Car.js";

describe('Choose Your Car', function () {
  describe('choosingType', function () {
    it('Year < 1900', () => {
      expect(() => chooseYourCar.choosingType('a', 'b', 1899)).to.throw('Invalid Year!');
    });

    it('Year > 2022', () => {
      expect(() => chooseYourCar.choosingType('a', 'b', 2023)).to.throw('Invalid Year!');
    });

    it('Type !== Sedan', () => {
      expect(() => chooseYourCar.choosingType('a', 'b', 2020)).to.throw('This type of car is not what you are looking for.');
    });

    it('Year > 2010', () => {
      expect(chooseYourCar.choosingType('Sedan', 'red', 2011)).to.equal('This red Sedan meets the requirements, that you have.');
    });

    it('Year === 2010', () => {
      expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.');
    });

    it('Year < 2010', () => {
      expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.equal('This Sedan is too old for you, especially with that red color.');
    });
  });

  describe('brandName', function () {
    it('Chosen brands', () => {
      expect(chooseYourCar.brandName(['a', 'b', 'c'], 0)).to.equal('b, c');
      expect(chooseYourCar.brandName(['a', 'b', 'c'], 1)).to.equal('a, c');
      expect(chooseYourCar.brandName(['a', 'b', 'c'], 2)).to.equal('a, b');
    });

    it('Invalid Information!', () => {
      expect(() => chooseYourCar.brandName('a', 1)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.brandName(['a', 'b'], 2)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.brandName(['a'], true)).to.throw('Invalid Information!');
    });
  });

  describe('CarFuelConsumption', function () {
    it('Liters/100km < 7L', () => {
      const litersPerHundredKm = ((0.3 / 10) * 100).toFixed(2);

      expect(chooseYourCar.carFuelConsumption(10, 0.3)).to.equal(`The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`);
    });

    it('Liters/100km = 7L', () => {
      const litersPerHundredKm = ((0.7 / 10) * 100).toFixed(2);

      expect(chooseYourCar.carFuelConsumption(10, 0.7)).to.equal(`The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`);
    });

    it('Liters/100km > 7L', () => {
      const litersPerHundredKm = ((5 / 10) * 100).toFixed(2);

      expect(chooseYourCar.carFuelConsumption(10, 5)).to.equal(`The car burns too much fuel - ${litersPerHundredKm} liters!`);
    });

    it('Invalid Information!', () => {
      expect(() => chooseYourCar.carFuelConsumption('a', 'b')).to.throw('Invalid Information!');
      expect(() => chooseYourCar.carFuelConsumption('a', 1)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.carFuelConsumption(1, 'b')).to.throw('Invalid Information!');
      expect(() => chooseYourCar.carFuelConsumption(-1, 1)).to.throw('Invalid Information!');
      expect(() => chooseYourCar.carFuelConsumption(1, -1)).to.throw('Invalid Information!');
    });
  });
});