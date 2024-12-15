import { expect } from "chai";
import { workforceManagement } from "./Workforce-Management.js";

describe('Workforce Management', function () {
  describe('recruitStaff', function () {
    it('Validate input', () => {
      expect(() => workforceManagement.recruitStaff('a', 'Dev', 1)).to.throw('We are not currently hiring for this role.');
    });

    it('Experience > 4', () => {
      const name = 'Bill';
      const role = 'Developer'
      expect(workforceManagement.recruitStaff(name, role, 5)).to.equal(`${name} has been successfully recruited for the role of ${role}.`);
    });

    it('Experience = 4', () => {
      const name = 'Sam';
      const role = 'Developer'
      expect(workforceManagement.recruitStaff(name, role, 4)).to.equal(`${name} has been successfully recruited for the role of ${role}.`);
    });

    it('Experience < 4', () => {
      const name = 'Lily';
      const role = 'Developer'
      expect(workforceManagement.recruitStaff(name, role, 3)).to.equal(`${name} is not suitable for this role.`);
    });
  });

  describe('computeWages', function () {
    it('Validate input', () => {
      expect(() => workforceManagement.computeWages('a')).to.throw('Invalid hours');
      expect(() => workforceManagement.computeWages('1')).to.throw('Invalid hours');
      expect(() => workforceManagement.computeWages(-1)).to.throw('Invalid hours');
    });

    it('Calculate salary without bonus', () => {
      expect(workforceManagement.computeWages(1)).to.equal(18);
      expect(workforceManagement.computeWages(10)).to.equal(180);
      expect(workforceManagement.computeWages(160)).to.equal(2880);
    });

    it('Calculate salary with bonus', () => {
      expect(workforceManagement.computeWages(161)).to.equal(4398);
      expect(workforceManagement.computeWages(165)).to.equal(4470);
    });
  });

  describe('dismissEmployee', function () {
    it('Validate input', () => {
      expect(() => workforceManagement.dismissEmployee({}, 'a')).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee([], '1')).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee('[]', 1)).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee([], -1)).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee(['a', 'b'], ['a', 'b'].length)).to.throw('Invalid input');
    });

    it('Remove employee by index', () => {
      expect(workforceManagement.dismissEmployee(['a', 'b', 'c'], 0)).to.equal('b, c');
      expect(workforceManagement.dismissEmployee(['a', 'b', 'c'], 1)).to.equal('a, c');
      expect(workforceManagement.dismissEmployee(['a', 'b', 'c'], 2)).to.equal('a, b');
    });
  });
});