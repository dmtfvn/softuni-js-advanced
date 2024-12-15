class LibraryCollection {
  capacity;

  constructor(capacity) {
    this.capacity = capacity;
    this.books = {};
  }

  addBook(bookName, bookAuthor) {
    if (this.capacity === 0) {
      throw new Error('Not enough space in the collection.');
    }

    this.books[bookName] = {};

    this.books[bookName].bookName = bookName;
    this.books[bookName].bookAuthor = bookAuthor;
    this.books[bookName].payed = false;

    this.capacity--;

    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    if (!this.books.hasOwnProperty(bookName)) {
      throw new Error(`${bookName} is not in the collection.`);
    }

    if (this.books[bookName].payed === true) {
      throw new Error(`${bookName} has already been paid.`);
    }

    this.books[bookName].payed = true;

    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    if (!this.books.hasOwnProperty(bookName)) {
      throw new Error('The book, you\'re looking for, is not found.');
    }

    if (this.books[bookName].payed === false) {
      throw new Error(`${bookName} need to be paid before removing from the collection.`);
    }

    delete this.books[bookName];

    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    const allBooks = Object.values(this.books);

    if (bookAuthor === undefined) {
      const libraryInfo = [`The book collection has ${this.capacity} empty spots left.`];

      allBooks.sort((a, b) => a.bookName.localeCompare(b.bookName));

      for (const curBook of allBooks) {
        const booleanResult = curBook.payed === true ? 'Has Paid' : 'Not Paid';

        libraryInfo.push(`${curBook.bookName} == ${curBook.bookAuthor} - ${booleanResult}.`);
      }

      return libraryInfo.join('\n');
    } else {
      for (const curBook of allBooks) {
        const booleanResult = curBook.payed === true ? 'Has Paid' : 'Not Paid';

        if (curBook.bookAuthor === bookAuthor) {
          return `${curBook.bookName} == ${curBook.bookAuthor} - ${booleanResult}.`;
        }
      }

      throw new Error(`${bookAuthor} is not in the collection.`);
    }
  }
}

const library = new LibraryCollection(5)

library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');

console.log(library.getStatistics());