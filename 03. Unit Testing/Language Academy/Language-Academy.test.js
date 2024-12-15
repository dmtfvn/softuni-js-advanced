import { expect } from 'chai';
import { languageAcademy } from './Language-Academy.js';

describe('Language Academy', function () {
  describe('difficultyLevel', function () {
    it('Beginner', () => {
      expect(languageAcademy.difficultyLevel('Beginner')).to.equal('The course is beginner-friendly and focuses on basic concepts like greetings, numbers, and common phrases.');
    });

    it('Intermediate', () => {
      expect(languageAcademy.difficultyLevel('Intermediate')).to.equal('The course is moderately challenging and includes grammar rules, sentence structure, and conversational practice.');
    });

    it('Advanced', () => {
      expect(languageAcademy.difficultyLevel('Advanced')).to.equal('The course is highly challenging and covers advanced vocabulary, idioms, and specialized topics like business or technical language.');
    });

    it('Invalid course', () => {
      expect(languageAcademy.difficultyLevel('a')).to.equal("Invalid course type. Please choose 'Beginner', 'Intermediate', or 'Advanced'.");
    });
  })

  describe('discountbyNumber', function () {
    it('Discount - 10%', () => {
      expect(languageAcademy.discountbyNumber(2, 5)).to.equal('Discount applied! You saved 0.5$ on your courses.');
      expect(languageAcademy.discountbyNumber(3, 5)).to.equal('Discount applied! You saved 0.5$ on your courses.');
    });

    it('Discount - 25%', () => {
      expect(languageAcademy.discountbyNumber(4, 5)).to.equal('Discount applied! You saved 1.25$ on your courses.');
    });

    it('No discount', () => {
      expect(languageAcademy.discountbyNumber(0, 5)).to.equal('You cannot apply a discount.');
      expect(languageAcademy.discountbyNumber(1, 5)).to.equal('You cannot apply a discount.');
    });

    it('Invalid input', () => {
      expect(() => languageAcademy.discountbyNumber('a', 'b')).to.throw('Invalid input.');
      expect(() => languageAcademy.discountbyNumber(1, 'b')).to.throw('Invalid input.');
      expect(() => languageAcademy.discountbyNumber('a', 1)).to.throw('Invalid input.');
    });
  })

  describe('additionalResources', function () {
    it('Matching resource', () => {
      const rC = [{ name: 'a', price: 2 }, { name: 'b', price: 4 }];
      const nR = ['a'];

      expect(languageAcademy.additionalResources(rC, nR)).to.equal(`Total Cost is 2$.`);
    });

    it('Matching resources', () => {
      const rC = [{ name: 'a', price: 2 }, { name: 'b', price: 4 }];
      const nR = ['a', 'b'];

      expect(languageAcademy.additionalResources(rC, nR)).to.equal(`Total Cost is 6$.`);
    });

    it('No matching resources', () => {
      const rC = [{ name: 'a', price: 2 }, { name: 'b', price: 4 }];
      const nR = ['c'];

      expect(languageAcademy.additionalResources(rC, nR)).to.equal(`Total Cost is 0$.`);
    });

    it('Invalid input', () => {
      expect(() => languageAcademy.additionalResources('a', 'b')).to.throw('Invalid input.');
      expect(() => languageAcademy.additionalResources('a', [])).to.throw('Invalid input.');
      expect(() => languageAcademy.additionalResources([], 'b')).to.throw('Invalid input.');
    });
  })
});