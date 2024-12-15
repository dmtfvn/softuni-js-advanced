import { expect } from "chai";
import { planYourTrip } from "./Plan-Your-Trip-Problem.js";

describe('Plan Your Trip', function () {
  describe('choosingDestination', function () {
    it('Different year', () => {
      expect(() => planYourTrip.choosingDestination('a', 'b', 2023)).to.throw('Invalid Year!');
      expect(() => planYourTrip.choosingDestination('a', 'b', 2025)).to.throw('Invalid Year!');
    });

    it('Different destination', () => {
      expect(() => planYourTrip.choosingDestination('a', 'b', 2024)).to.throw('This destination is not what you are looking for.');
    });

    it('Destination requirement met', () => {
      const destination = 'Ski Resort';
      const season = 'Winter';

      expect(planYourTrip.choosingDestination(destination, season, 2024)).to.equal(`Great choice! The ${season} is the perfect time to visit the ${destination}.`);
    });

    it('Destination requirement not met', () => {
      const destination = 'Ski Resort';

      expect(planYourTrip.choosingDestination(destination, 'a', 2024)).to.equal(`Consider visiting during the Winter for the best experience at the ${destination}.`);
    });
  });

  describe('exploreOptions', function () {
    it('Chosen activities', () => {
      expect(planYourTrip.exploreOptions(['a', 'b', 'c'], 0)).to.equal('b, c');
      expect(planYourTrip.exploreOptions(['a', 'b', 'c'], 1)).to.equal('a, c');
      expect(planYourTrip.exploreOptions(['a', 'b', 'c'], 2)).to.equal('a, b');
    });

    it('Validate input', () => {
      const arr = ['a', 'b'];

      expect(() => planYourTrip.exploreOptions('[]', 1)).to.throw('Invalid Information!');
      expect(() => planYourTrip.exploreOptions(arr, '1')).to.throw('Invalid Information!');
      expect(() => planYourTrip.exploreOptions(arr, -1)).to.throw('Invalid Information!');
      expect(() => planYourTrip.exploreOptions(arr, arr.length)).to.throw('Invalid Information!');
      expect(() => planYourTrip.exploreOptions(arr, 1.2)).to.throw('Invalid Information!');
    });
  });

  describe('estimateExpenses', function () {
    it('Validate input', () => {
      expect(() => planYourTrip.estimateExpenses(1, [])).to.throw('Invalid Information!');
      expect(() => planYourTrip.estimateExpenses([], 1)).to.throw('Invalid Information!');

      expect(() => planYourTrip.estimateExpenses(1, {})).to.throw('Invalid Information!');
      expect(() => planYourTrip.estimateExpenses({}, 1)).to.throw('Invalid Information!');

      expect(() => planYourTrip.estimateExpenses(1, true)).to.throw('Invalid Information!');
      expect(() => planYourTrip.estimateExpenses(true, 1)).to.throw('Invalid Information!');
    });

    it('Total cost < 500', () => {
      const num1 = 10;
      const num2 = 20;
      const totalCost = (num1 * num2).toFixed(2);

      expect(planYourTrip.estimateExpenses(num1, num2)).to.equal(`The trip is budget-friendly, estimated cost is $${totalCost}.`);
    });

    it('Total cost = 500', () => {
      const num1 = 100;
      const num2 = 5;
      const totalCost = (num1 * num2).toFixed(2);

      expect(planYourTrip.estimateExpenses(num1, num2)).to.equal(`The trip is budget-friendly, estimated cost is $${totalCost}.`);
    });

    it('Total cost > 500', () => {
      const num1 = 100;
      const num2 = 50;
      const totalCost = (num1 * num2).toFixed(2);

      expect(planYourTrip.estimateExpenses(num1, num2)).to.equal(`The estimated cost for the trip is $${totalCost}, plan accordingly.`);
    });
  });
});