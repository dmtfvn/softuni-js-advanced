import { expect } from "chai";
import { StringBuilder } from "../06-String-Builder.js";

describe('String Builder', function () {
  let ref;

  beforeEach(() => {
    ref = new StringBuilder();
  });

  describe('Constructor', function () {
    it('must throw an error if argument is not a string', () => {
      expect(() => new StringBuilder(1.23)).to.throw(TypeError);
      expect(() => new StringBuilder(null)).to.throw(TypeError);
    });

    it('must instantiate with an empty string', () => {
      ref = new StringBuilder(undefined);
      expect(ref.toString()).to.equal('');
    });

    it('must instantiate with a string', () => {
      ref = new StringBuilder('a');
      expect(ref.toString()).to.equal('a');

      ref = new StringBuilder('abc');
      expect(ref.toString()).to.equal('abc');
    });
  });

  describe('Append', function () {
    it('must throw an error if argument is not a string', () => {
      ref = new StringBuilder();
      expect(() => ref.append(true)).to.throw(TypeError);

      ref = new StringBuilder('abc');
      expect(() => ref.append(123)).to.throw(TypeError);
    });

    it('must append to empty storage', () => {
      ref = new StringBuilder('');
      ref.append('a');
      expect(ref.toString()).to.equal('a');
    });

    it('must append to existing storage', () => {
      ref = new StringBuilder('a');
      ref.append('b');
      expect(ref.toString()).to.equal('ab');
      ref.append('c');
      expect(ref.toString()).to.equal('abc');
      ref.remove(0, 1);
      expect(ref.toString()).to.equal('bc');
    });
  });

  describe('Prepend', function () {
    it('must throw an error if argument is not a string', () => {
      ref = new StringBuilder();
      expect(() => ref.prepend(true)).to.throw(TypeError);

      ref = new StringBuilder('abc');
      expect(() => ref.prepend(123)).to.throw(TypeError);
    });

    it('must prepend to empty storage', () => {
      ref = new StringBuilder('');
      ref.prepend('a');
      expect(ref.toString()).to.equal('a');
    });

    it('must prepend to existing storage', () => {
      ref = new StringBuilder('c');
      ref.prepend('b');
      expect(ref.toString()).to.equal('bc');
      ref.prepend('a');
      expect(ref.toString()).to.equal('abc');
      ref.remove(1, 1);
      expect(ref.toString()).to.equal('ac');
    });
  });

  describe('InsertAt', function () {
    it('must throw an error if argument is not a string', () => {
      ref = new StringBuilder();
      expect(() => ref.insertAt(true, 1)).to.throw(TypeError);

      ref = new StringBuilder('abc');
      expect(() => ref.insertAt(123, 0)).to.throw(TypeError);
    });

    it('must add single char string at given index', () => {
      ref = new StringBuilder('');
      ref.insertAt('a', 0);
      expect(ref.toString()).to.equal('a');

      ref = new StringBuilder('a');
      ref.insertAt('b', 1);
      expect(ref.toString()).to.equal('ab');

      ref = new StringBuilder('ab');
      ref.insertAt('c', 2);
      expect(ref.toString()).to.equal('abc');
    });

    it('must add multiple chars string at given index', () => {
      ref = new StringBuilder('this  great');
      ref.insertAt('is', 5);
      expect(ref.toString()).to.equal('this is great');

      ref = new StringBuilder('simple ');
      ref.insertAt('test', 7);
      expect(ref.toString()).to.equal('simple test');

      ref = new StringBuilder(' true');
      ref.insertAt('stay', 0);
      expect(ref.toString()).to.equal('stay true');
    });
  });

  describe('Remove', function () {
    it('must remove elements with specific length', () => {
      ref = new StringBuilder('string');
      ref.remove(0, 3);
      expect(ref.toString()).to.equal('ing');

      ref = new StringBuilder('test string');
      ref.remove(4, 4);
      expect(ref.toString()).to.equal('testing');

      ref = new StringBuilder('abc');
      ref.remove(1, 4);
      expect(ref.toString()).to.equal('a');

      ref = new StringBuilder('abc');
      ref.remove(0, 4);
      expect(ref.toString()).to.equal('');
    });
  });

  describe('ToString', function () {
    it('must return string elements joined by empty string', () => {
      ref = new StringBuilder();
      expect(ref.toString()).to.equal('');

      ref = new StringBuilder('a b c');
      expect(ref.toString()).to.equal('a b c');

      ref = new StringBuilder('ab cd ef');
      expect(ref.toString()).to.equal('ab cd ef');
    });
  });
});