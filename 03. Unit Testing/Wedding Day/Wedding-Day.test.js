import { expect } from "chai";
import { weddingDay } from "./Wedding-Day.js";

describe('Wedding Day', function () {
  describe('pickVenue', function () {
    it('Invalid input', () => {
      expect(() => weddingDay.pickVenue('1', '2', 'a')).to.throw('Invalid Information!');
      expect(() => weddingDay.pickVenue(1, '2', 'a')).to.throw('Invalid Information!');
      expect(() => weddingDay.pickVenue('1', 2, 'a')).to.throw('Invalid Information!');
      expect(() => weddingDay.pickVenue(1, 2, '')).to.throw('Invalid Information!');
    });

    it('Different location', () => {
      expect(() => weddingDay.pickVenue(1, 2, 'Sofia')).to.throw('The location of this venue is not in the correct area!');
    });

    it('Capacity met', () => {
      expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal('This venue meets the requirements, with capacity of 150 guests and 120$ cover.');
      expect(weddingDay.pickVenue(151, 119, 'Varna')).to.equal('This venue meets the requirements, with capacity of 151 guests and 119$ cover.');
      expect(weddingDay.pickVenue(150, 119, 'Varna')).to.equal('This venue meets the requirements, with capacity of 150 guests and 119$ cover.');
      expect(weddingDay.pickVenue(151, 120, 'Varna')).to.equal('This venue meets the requirements, with capacity of 151 guests and 120$ cover.');
    });

    it('Capacity not met', () => {
      expect(weddingDay.pickVenue(149, 121, 'Varna')).to.equal('This venue does not meet your requirements!');
    });
  });

  describe('otherSpendings', function () {
    it('Additional costs w discount', () => {
      expect(weddingDay.otherSpendings(['flowers'], ['video'], true)).to.equal('You spend 1530$ for wedding decoration and photography with 15% discount!');
    });

    it('Additional costs w/o discount', () => {
      expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal('You spend 1200$ for wedding decoration and photography!');
    });

    it('Invalid input', () => {
      expect(() => weddingDay.otherSpendings('[]', '[]', 'true')).to.throw('Invalid Information!');
      expect(() => weddingDay.otherSpendings([], 'b', 1)).to.throw('Invalid Information!');
      expect(() => weddingDay.otherSpendings('a', [], 1)).to.throw('Invalid Information!');
      expect(() => weddingDay.otherSpendings('a', 'b', true)).to.throw('Invalid Information!');
    });
  });

  describe('tableDistribution', function () {
    it('Guests per table enough', () => {
      const guests = 5;
      const tables = 2;

      const peopleOnTable = Math.round(guests / tables);

      expect(weddingDay.tableDistribution(guests, tables)).to.equal(`There is only ${peopleOnTable} people on every table, you can join some tables.`);
    });

    it('Guests per table not enough', () => {
      const guests = 6;
      const tables = 1;

      const peopleOnTable = Math.round(guests / tables);

      expect(weddingDay.tableDistribution(guests, tables)).to.equal(`You have ${tables} tables with ${peopleOnTable} guests on table.`);
    });

    it('Invalid input', () => {
      expect(() => weddingDay.tableDistribution()).to.throw('Invalid Information!');
    });
  });
});