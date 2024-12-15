import { expect } from 'chai';
import { rentCar } from './Rent-Car.js';

describe('Rent Car', function () {
  describe('searchCar', function () {
    it('Matching element', () => {
      const shop = ['Volkswagen', 'BMW', 'Audi'];
      const model = 'Volkswagen';

      expect(rentCar.searchCar(shop, model)).to.equal(`There is 1 car of model ${model} in the catalog!`);
    });

    it('Matching elements', () => {
      const shop = ['Volkswagen', 'Audi', 'Audi'];
      const model = 'Audi';

      expect(rentCar.searchCar(shop, model)).to.equal(`There is 2 car of model ${model} in the catalog!`);
    });

    it('No matching element', () => {
      const shop = ['Volkswagen', 'BMW', 'Audi'];
      const model = 'Opel';

      expect(() => rentCar.searchCar(shop, model)).to.throw('There are no such models in the catalog!');
    });

    it('Invalid input', () => {
      expect(() => rentCar.searchCar('a', 1)).to.throw('Invalid input!');
      expect(() => rentCar.searchCar([], 1)).to.throw('Invalid input!');
      expect(() => rentCar.searchCar(1, 'a')).to.throw('Invalid input!');
    });
  });

  describe('calculatePriceOfCar', function () {
    it('Invalid input', () => {
      expect(() => rentCar.calculatePriceOfCar(1, 'a')).to.throw('Invalid input!');
      expect(() => rentCar.calculatePriceOfCar('a', true)).to.throw('Invalid input!');
      expect(() => rentCar.calculatePriceOfCar({}, 1)).to.throw('Invalid input!');
    });

    it('No such model', () => {
      expect(() => rentCar.calculatePriceOfCar('Opel', 1)).to.throw('No such model in the catalog!');
    });

    it('Total price', () => {
      expect(rentCar.calculatePriceOfCar('Audi', 1)).to.equal('You choose Audi and it will cost $36!');
      expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal('You choose BMW and it will cost $90!');
    });
  });

  describe('checkBudget', function () {
    it('Invalid input', () => {
      expect(() => rentCar.checkBudget('a', [], {})).to.throw('Invalid input!');
      expect(() => rentCar.checkBudget(1, [], {})).to.throw('Invalid input!');
      expect(() => rentCar.checkBudget('a', 1, {})).to.throw('Invalid input!');
      expect(() => rentCar.checkBudget('a', [], 1)).to.throw('Invalid input!');
    });

    it('Budget > Cost', () => {
      expect(rentCar.checkBudget(1, 2, 3)).to.equal('You rent a car!');
    });

    it('Budget = Cost', () => {
      expect(rentCar.checkBudget(1, 2, 2)).to.equal('You rent a car!');
    });

    it('Budget < Cost', () => {
      expect(rentCar.checkBudget(1, 2, 1)).to.equal('You need a bigger budget!');
    });
  });
});