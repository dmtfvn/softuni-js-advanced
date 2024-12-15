import { expect } from "chai";
import { onlineStore } from "./Online-Store.js";

describe('Online Store', function () {
  describe('isProductAvailable', function () {
    it('Stock quantity < 0', () => {
      const product = 'pie';

      expect(onlineStore.isProductAvailable(product, -1)).to.equal(`Sorry, ${product} is currently out of stock.`);
    });

    it('Stock quantity = 0', () => {
      const product = 'pie';

      expect(onlineStore.isProductAvailable(product, 0)).to.equal(`Sorry, ${product} is currently out of stock.`);
    });

    it('Stock quantity > 0', () => {
      const product = 'pie';

      expect(onlineStore.isProductAvailable(product, 1)).to.equal(`Great! ${product} is available for purchase.`);
    });

    it('Valid input', () => {
      expect(() => onlineStore.isProductAvailable(1, 'a')).to.throw('Invalid input.');
      expect(() => onlineStore.isProductAvailable(1, 2)).to.throw('Invalid input.');
      expect(() => onlineStore.isProductAvailable('a', 'b')).to.throw('Invalid input.');
    });
  });

  describe('canAffordProduct', function () {
    it('Balance < 0', () => {
      expect(onlineStore.canAffordProduct(2, 1)).to.equal('You don\'t have sufficient funds to buy this product.');
    });

    it('Balance = 0', () => {
      expect(onlineStore.canAffordProduct(1, 1)).to.equal('Product purchased. Your remaining balance is $0.');
    });

    it('Balance > 0', () => {
      expect(onlineStore.canAffordProduct(1, 2)).to.equal('Product purchased. Your remaining balance is $1.');
    });

    it('Valid input', () => {
      expect(() => onlineStore.canAffordProduct('1', '2')).to.throw('Invalid input.');
      expect(() => onlineStore.canAffordProduct('a', 1)).to.throw('Invalid input.');
      expect(() => onlineStore.canAffordProduct(1, 'a')).to.throw('Invalid input.');
    });
  });

  describe('getRecommendedProducts', function () {
    it('Products found by categoty', () => {
      const productList = [
        { name: 'bike', category: 'toy' },
        { name: 'ball', category: 'toy' },
        { name: 'cake', category: 'food' }
      ];

      expect(onlineStore.getRecommendedProducts(productList, 'toy')).to.equal('Recommended products in the toy category: bike, ball');
    });

    it('Products not found by categoty', () => {
      const productList = [
        { name: 'bike', category: 'toy' },
        { name: 'cake', category: 'food' }
      ];

      expect(onlineStore.getRecommendedProducts(productList, 'cosmetic')).to.equal('Sorry, we currently have no recommended products in the cosmetic category.');
    });

    it('Valid input', () => {
      expect(() => onlineStore.getRecommendedProducts([], 1)).to.throw('Invalid input.');
      expect(() => onlineStore.getRecommendedProducts(1, 'a')).to.throw('Invalid input.');
      expect(() => onlineStore.getRecommendedProducts('[]', true)).to.throw('Invalid input.');
    });
  });
});