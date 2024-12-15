import { expect } from "chai";
import { rgbToHexColor } from "../06-RGB-to-Hex.js";

describe('RGB to Hex', function () {
  describe('Happy path', function () {
    it('must return the same color in hex format', () => {
      expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
      expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
      expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
      expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
      expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });
  });

  describe('Edge cases', function () {
    it('must not be equal', () => {
      expect(rgbToHexColor(1, 255, 0)).to.not.equal('string');
      expect(rgbToHexColor('1', '255', '0')).to.not.equal('#01FF00');
      expect(rgbToHexColor([255, 0, 1])).to.not.equal('#FF0001');
      expect(rgbToHexColor(['1', '0', '255'])).to.not.equal('#0100FF');
    });
  });

  describe('Validation', function () {
    it('must return undefined if not in the expected range', () => {
      expect(rgbToHexColor(-1, 255, 0)).to.be.undefined;
      expect(rgbToHexColor(0, 255, 256)).to.be.undefined;
      expect(rgbToHexColor(255, 260, 250)).to.be.undefined;
      expect(rgbToHexColor(-255, -55, -255)).to.be.undefined;
    });

    it('must return undefined if type is invalid', () => {
      expect(rgbToHexColor('1', 255, 0)).to.be.undefined;
      expect(rgbToHexColor('a', 1, 255)).to.be.undefined;
      expect(rgbToHexColor([], 1, 255)).to.be.undefined;
      expect(rgbToHexColor([0, 255, 0])).to.be.undefined;
    });
  });

  describe('Test Overload', function () {
    it('must returt the correct color with various values', () => {
      expect(rgbToHexColor(174, 0, 29)).to.equal('#AE001D');
      expect(rgbToHexColor(4, 11, 210)).to.equal('#040BD2');
      expect(rgbToHexColor(69, 241, 2)).to.equal('#45F102');
    });
  });
});