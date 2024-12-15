import { expect } from 'chai';
import { companyAdministration } from './Company-Administration.js';

describe('Company Administration', function () {
  describe('hiringEmployee', function () {
    it('Different position', () => {
      expect(() => companyAdministration.hiringEmployee('a', 'b', 1)).to.throw('We are not looking for workers for this position.');
    });

    it('Years Exp > 3', () => {
      expect(companyAdministration.hiringEmployee('Sue', 'Programmer', 4)).to.equal('Sue was successfully hired for the position Programmer.');
    });

    it('Years Exp = 3', () => {
      expect(companyAdministration.hiringEmployee('Sam', 'Programmer', 3)).to.equal('Sam was successfully hired for the position Programmer.');
    });

    it('Years Exp < 3', () => {
      expect(companyAdministration.hiringEmployee('Sam', 'Programmer', 1)).to.equal('Sam is not approved for this position.');
    });
  });

  describe('calculateSalary', function () {
    it('Salary', () => {
      expect(companyAdministration.calculateSalary(8)).to.equal(120);
      expect(companyAdministration.calculateSalary(160)).to.equal(2400);
      expect(companyAdministration.calculateSalary(161)).to.equal(3415);
    });

    it('Invalid hours', () => {
      expect(() => companyAdministration.calculateSalary('a')).to.throw('Invalid hours');
      expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
    });
  });

  describe('firedEmployee', function () {
    it('Current employees', () => {
      expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 0)).to.equal('b, c');
      expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 1)).to.equal('a, c');
      expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 2)).to.equal('a, b');
    });

    it('Invalid input', () => {
      expect(() => companyAdministration.firedEmployee('a', {})).to.throw('Invalid input');
      expect(() => companyAdministration.firedEmployee({}, 1)).to.throw('Invalid input');
      expect(() => companyAdministration.firedEmployee([], 'a')).to.throw('Invalid input');
      expect(() => companyAdministration.firedEmployee(['a'], 1)).to.throw('Invalid input');
      expect(() => companyAdministration.firedEmployee(['a'], -1)).to.throw('Invalid input');
    });
  });
});