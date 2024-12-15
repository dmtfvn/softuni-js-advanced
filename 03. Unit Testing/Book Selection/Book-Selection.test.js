import { expect } from "chai";
import { bookSelection } from "./Book-Selection.js";

describe('Book selection', function () {
  describe('isGenreSuitable', function () {
    it('Thriller, age 11', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal('Books with Thriller genre are not suitable for kids at 11 age');
    });

    it('Thriller, age 12', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
    });

    it('Horror, age 11', () => {
      expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal('Books with Horror genre are not suitable for kids at 11 age');
    });

    it('Horror, age 12', () => {
      expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
    });

    it('Above the age limit', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
      expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
    });
  })

  describe('isItAffordable', function () {
    it('Not enough budget', () => {
      expect(bookSelection.isItAffordable(2, 1)).to.equal('You don\'t have enough money');
    });

    it('Enough budget', () => {
      expect(bookSelection.isItAffordable(1, 1)).to.equal('Book bought. You have 0$ left');
      expect(bookSelection.isItAffordable(1, 2)).to.equal('Book bought. You have 1$ left');
    });

    it('Invalid input', () => {
      expect(() => bookSelection.isItAffordable('a', {})).to.throw('Invalid input');
      expect(() => bookSelection.isItAffordable([], true)).to.throw('Invalid input');
    });
  })

  describe('suitableTitles', function () {
    it('Title not matching the wanted genre', () => {
      const books = [
        { title: 'The Da Vinci Code', genre: 'Thriller' }
      ];

      const wantedGenre = 'Sci-Fi';

      expect(bookSelection.suitableTitles(books, wantedGenre)).to.deep.equal([]);
    });

    it('Title matching the wanted genre', () => {
      const books = [
        { title: 'The Da Vinci Code', genre: 'Thriller' },
        { title: 'The Hobbit', genre: 'Fantasy' }
      ];

      const wantedGenre = 'Thriller';

      expect(bookSelection.suitableTitles(books, wantedGenre)).to.deep.equal(['The Da Vinci Code']);
    });

    it('Titles matching the wanted genre', () => {
      const books = [
        { title: 'The Da Vinci Code', genre: 'Thriller' },
        { title: 'The Hobbit', genre: 'Fantasy' },
        { title: 'The Matrix', genre: 'Fantasy' }
      ];

      const wantedGenre = 'Fantasy';

      expect(bookSelection.suitableTitles(books, wantedGenre)).to.deep.equal(['The Hobbit', 'The Matrix']);
    });

    it('Invalid input', () => {
      expect(() => bookSelection.suitableTitles({}, 'a')).to.throw('Invalid input');
      expect(() => bookSelection.suitableTitles([], true)).to.throw('Invalid input');
      expect(() => bookSelection.suitableTitles(1, false)).to.throw('Invalid input');
    });
  })
});