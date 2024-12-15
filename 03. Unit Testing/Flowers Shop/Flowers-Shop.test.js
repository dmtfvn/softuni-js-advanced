import { expect } from 'chai';
import { flowerShop } from './Flowers-Shop.js';

describe('Flower Shop', function () {
  describe('calcPriceOfFlowers', function () {
    it('Invalid input', () => {
      expect(() => flowerShop.calcPriceOfFlowers({}, [], true)).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers(1, 2, 3)).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('a', 2, [])).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('a', {}, 1)).to.throw('Invalid input!');
    });

    it('Total price', () => {
      expect(flowerShop.calcPriceOfFlowers('Rose', 2, 3)).to.equal(`You need $6.00 to buy Rose!`);
    });
  })

  describe('checkFlowersAvailable', function () {
    it('Flower is available', () => {
      expect(flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid'])).to.equal(`The Rose are available!`);
    });

    it('Flower is not available', () => {
      expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", 'Orchid'])).to.equal(`The Lily are sold! You need to purchase more!`);
    });
  })

  describe('sellFlowers', function () {
    it('Chosen flowers', () => {
      expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 0)).to.equal('Lily / Orchid');
      expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1)).to.equal('Rose / Orchid');
      expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 2)).to.equal('Rose / Lily');
    });

    it('Invalid input', () => {
      expect(() => flowerShop.sellFlowers('a', {})).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers([], 'a')).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers('a', 1)).to.throw('Invalid input!');
    });
  })
});