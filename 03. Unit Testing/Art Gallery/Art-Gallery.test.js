import { expect } from "chai";
import { artGallery } from "./Art-Gallery.js";

describe('Art Gallery', function () {
  describe('addArtwork', () => {
    it('Input validation - Information', () => {
      expect(() => artGallery.addArtwork(1, '1 x 2', 'c')).to.throw('Invalid Information!');
      expect(() => artGallery.addArtwork(2, '1 x 2', '')).to.throw('Invalid Information!');
      expect(() => artGallery.addArtwork('a', '1 x 2', 1)).to.throw('Invalid Information!');
      expect(() => artGallery.addArtwork('', '1 x 2', 2)).to.throw('Invalid Information!');
    });

    it('Input validation - Dimensions', () => {
      expect(() => artGallery.addArtwork('a', '-1 x -2', 'b')).to.throw('Invalid Dimensions!');
      expect(() => artGallery.addArtwork('a', '-10 x -20', 'b')).to.throw('Invalid Dimensions!');
    });

    it('Input validation - Artist', () => {
      expect(() => artGallery.addArtwork('a', '1 x 2', 'Uzumaki')).to.throw('This artist is not allowed in the gallery!');
      expect(() => artGallery.addArtwork('a', '1 x 2', 'Akira')).to.throw('This artist is not allowed in the gallery!');
      expect(() => artGallery.addArtwork('a', '1 x 2', '')).to.throw('This artist is not allowed in the gallery!');
    });

    it('Valid input', () => {
      const title = 'Water Lilies';
      const dimensions = '30 x 40';
      const artist = 'Monet';

      expect(artGallery.addArtwork(title, dimensions, artist)).to.equal(`Artwork added successfully: '${title}' by ${artist} with dimensions ${dimensions}.`);
    });
  });

  describe('calculateCosts', () => {
    it('Input validation - Information', () => {
      expect(() => artGallery.calculateCosts(1, 2, 'true')).to.throw('Invalid Information!');
      expect(() => artGallery.calculateCosts(1, 2, '')).to.throw('Invalid Information!');
      expect(() => artGallery.calculateCosts(1, -2, false)).to.throw('Invalid Information!');
      expect(() => artGallery.calculateCosts(-1, 2, true)).to.throw('Invalid Information!');
      expect(() => artGallery.calculateCosts(-1, -2, false)).to.throw('Invalid Information!');
      expect(() => artGallery.calculateCosts(-1, -2, '')).to.throw('Invalid Information!');
    });

    it('Valid total cost if sponsor is True', () => {
      const num1 = 10;
      const num2 = 20;
      const sponsor = true;
      const sum = num1 + num2;

      const totalPrice = sum - (sum * 0.10);

      expect(artGallery.calculateCosts(num1, num2, sponsor)).to.equal(`Exhibition and insurance costs are ${totalPrice}$, reduced by 10% with the help of a donation from your sponsor.`);
    });

    it('Valid total cost if sponsor is False', () => {
      const num1 = 10;
      const num2 = 20;
      const sponsor = false;
      const totalPrice = num1 + num2;

      expect(artGallery.calculateCosts(num1, num2, sponsor)).to.equal(`Exhibition and insurance costs are ${totalPrice}$.`);
    });
  });

  describe('organizeExhibits', () => {
    it('Input validation - Information', () => {
      expect(() => artGallery.organizeExhibits('1', '2')).to.throw('Invalid Information!');
      expect(() => artGallery.organizeExhibits(-1, -2)).to.throw('Invalid Information!');
      expect(() => artGallery.organizeExhibits(1, '2')).to.throw('Invalid Information!');
      expect(() => artGallery.organizeExhibits('1', 2)).to.throw('Invalid Information!');
    });

    it('Artworks Per Space: result < 5', () => {
      const num1 = 15;
      const num2 = 20;
      const result = num1 / num2;

      const artworksPerSpace = Math.floor(result);

      expect(artGallery.organizeExhibits(num1, num2)).to.equal(`There are only ${artworksPerSpace} artworks in each display space, you can add more artworks.`);
    });

    it('Artworks Per Space: result = 5', () => {
      const num1 = 50;
      const displaySpacesCount = 10;
      const result = num1 / displaySpacesCount;

      const artworksPerSpace = Math.floor(result);

      expect(artGallery.organizeExhibits(num1, displaySpacesCount)).to.equal(`You have ${displaySpacesCount} display spaces with ${artworksPerSpace} artworks in each space.`);
    });

    it('Artworks Per Space: result > 5', () => {
      const num1 = 65;
      const displaySpacesCount = 10;
      const result = num1 / displaySpacesCount;

      const artworksPerSpace = Math.floor(result);

      expect(artGallery.organizeExhibits(num1, displaySpacesCount)).to.equal(`You have ${displaySpacesCount} display spaces with ${artworksPerSpace} artworks in each space.`);
    });
  });
});