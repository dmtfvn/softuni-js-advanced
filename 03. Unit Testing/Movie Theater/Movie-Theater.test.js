import { expect } from "chai";
import { movieTheater } from "./Movie-Theater.js";

describe('Movie Theater', function () {
  describe('ageRestrictions', function () {
    it('Rating G', () => {
      expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
    });

    it('Rating PG', () => {
      expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
    });

    it('Rating R', () => {
      expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
    });

    it('Rating NC-17', () => {
      expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
    });

    it('No restrictions', () => {
      expect(movieTheater.ageRestrictions('aaa')).to.equal('There are no age restrictions for this movie');
    });
  })

  describe('moneySpent', function () {
    it('Total cost w discount', () => {
      const tickets = 4 * 15;
      const foodAndDrinks = 6 + 1.5;

      const totalCost = (tickets + foodAndDrinks) * 0.8;

      expect(movieTheater.moneySpent(4, ['Nachos'], ['Water'])).to.equal(`The total cost for the purchase with applied discount is ${totalCost.toFixed(2)}`);
    });

    it('Total cost w/o discount', () => {
      const tickets = 2 * 15;
      const foodAndDrinks = 4.5 + 2.5;

      const totalCost = (tickets + foodAndDrinks);

      expect(movieTheater.moneySpent(2, ['Popcorn'], ['Soda'])).to.equal(`The total cost for the purchase is ${totalCost.toFixed(2)}`);
    });

    it('Invalid input', () => {
      expect(() => movieTheater.moneySpent(1, {}, true)).to.throw('Invalid input');
      expect(() => movieTheater.moneySpent('a', [], 1)).to.throw('Invalid input');
      expect(() => movieTheater.moneySpent(false, 'a', [])).to.throw('Invalid input');
    });
  })

  describe('reservation', function () {
    it('Row with free seats', () => {
      expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 6)).to.equal(1);
      expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 3 }, { rowNumber: 2, freeSeats: 15 }], 11)).to.equal(2);
    });

    it('Invalid input', () => {
      expect(() => movieTheater.reservation('a', 1)).to.throw('Invalid input');
      expect(() => movieTheater.reservation([], 'a')).to.throw('Invalid input');
      expect(() => movieTheater.reservation(true, {})).to.throw('Invalid input');
    });
  })
});