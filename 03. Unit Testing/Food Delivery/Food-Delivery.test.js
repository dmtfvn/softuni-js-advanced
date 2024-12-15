import { expect } from "chai";
import { foodDelivery } from "./Food-Delivery.js";

describe('Food Delivery', function () {
  describe('getCategory', function () {
    it('Category Vegan', () => {
      expect(foodDelivery.getCategory('Vegan')).to.equal('Dishes that contain no animal products.');
    });

    it('Category Vegetarian', () => {
      expect(foodDelivery.getCategory('Vegetarian')).to.equal('Dishes that contain no meat or fish.');
    });

    it('Category Gluten-Free', () => {
      expect(foodDelivery.getCategory('Gluten-Free')).to.equal('Dishes that contain no gluten.');
    });

    it('Category All', () => {
      expect(foodDelivery.getCategory('All')).to.equal('All available dishes.');
    });

    it('Type is different than Vegan, Vegetarian, Gluten-Free, or All', () => {
      expect(() => foodDelivery.getCategory('Keto')).to.throw('Invalid Category!');
      expect(() => foodDelivery.getCategory('Paleo')).to.throw('Invalid Category!');
    });
  });

  describe('addMenuItem', function () {
    it('Add from menuItem to availableItems: price <= maxPrice', () => {
      const menuItem = [{ name: 'item-1', price: 1 }, { name: 'item-2', price: 5 }];

      expect(foodDelivery.addMenuItem(menuItem, 5)).to.equal(`There are 2 available menu items matching your criteria!`);
    });

    it('Add from menuItem to availableItems: price <= maxPrice', () => {
      const menuItem = [{ name: 'item-1', price: 2 }, { name: 'item-2', price: 5 }];

      expect(foodDelivery.addMenuItem(menuItem, 6)).to.equal(`There are 2 available menu items matching your criteria!`);
    });

    it('Add from menuItem to availableItems: price > maxPrice', () => {
      const menuItem = [{ name: 'item-1', price: 1 }, { name: 'item-2', price: 6 }];

      expect(foodDelivery.addMenuItem(menuItem, 5)).to.equal(`There are 1 available menu items matching your criteria!`);
    });

    it('Add from menuItem to availableItems: price > maxPrice', () => {
      const menuItem = [{ name: 'item-1', price: 6 }, { name: 'item-2', price: 7 }];

      expect(foodDelivery.addMenuItem(menuItem, 5)).to.equal(`There are 0 available menu items matching your criteria!`);
    });

    it('Validate input', () => {
      expect(() => foodDelivery.addMenuItem('[]', 1)).to.throw('Invalid Information!');
      expect(() => foodDelivery.addMenuItem([], '1')).to.throw('Invalid Information!');
      expect(() => foodDelivery.addMenuItem({}, true)).to.throw('Invalid Information!');
      expect(() => foodDelivery.addMenuItem([], 4)).to.throw('Invalid Information!');
    });
  });

  describe('calculateOrderCost', function () {
    it('Total price calculation: discount = true', () => {
      const totalPrice = 3.4;

      expect(foodDelivery.calculateOrderCost(['standard'], ['sauce'], true)).to.equal(`You spend $${totalPrice.toFixed(2)} for shipping and addons with a 15% discount!`);
    });

    it('Total price calculation: discount = false', () => {
      const totalPrice = 8.5;

      expect(foodDelivery.calculateOrderCost(['express'], ['beverage'], false)).to.equal(`You spend $${totalPrice.toFixed(2)} for shipping and addons!`);
    });

    it('Validate input', () => {
      expect(() => foodDelivery.calculateOrderCost([], {}, 1)).to.throw('Invalid Information!');
      expect(() => foodDelivery.calculateOrderCost('[]', [], 1)).to.throw('Invalid Information!');
      expect(() => foodDelivery.calculateOrderCost('a', 1, true)).to.throw('Invalid Information!');
      expect(() => foodDelivery.calculateOrderCost([], [], 1)).to.throw('Invalid Information!');
      expect(() => foodDelivery.calculateOrderCost(1, [], true)).to.throw('Invalid Information!');
      expect(() => foodDelivery.calculateOrderCost([], 1, true)).to.throw('Invalid Information!');
    });
  });
});