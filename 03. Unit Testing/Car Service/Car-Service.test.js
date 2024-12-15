import { expect } from "chai";
import { carService } from "./Car-Service.js";

describe('Car Service', function () {
  describe('isItExpensive', function () {
    it('Parameter = Engine', () => {
      expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
    });

    it('Parameter = Transmission', () => {
      expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
    });

    it('Wrong parameter', () => {
      expect(carService.isItExpensive('aaa')).to.equal('The overall price will be a bit cheaper');
    });
  });

  describe('discount', function () {
    it('Discount of 15%', () => {
      expect(carService.discount(3, 10)).to.equal(`Discount applied! You saved 1.5$`);
      expect(carService.discount(6, 20)).to.equal(`Discount applied! You saved 3$`);
      expect(carService.discount(7, 30)).to.equal(`Discount applied! You saved 4.5$`);
    });

    it('Discount of 30%', () => {
      expect(carService.discount(8, 10)).to.equal(`Discount applied! You saved 3$`);
      expect(carService.discount(9, 20)).to.equal(`Discount applied! You saved 6$`);
    });

    it('No discount', () => {
      expect(carService.discount(1, 10)).to.equal(`You cannot apply a discount`);
      expect(carService.discount(2, 20)).to.equal(`You cannot apply a discount`);
    });

    it('Invalid input', () => {
      expect(() => carService.discount('a', 1)).to.throw('Invalid input');
      expect(() => carService.discount(1, 'a')).to.throw('Invalid input');
      expect(() => carService.discount({}, 'a')).to.throw('Invalid input');
    });
  });

  describe('partsToBuy', function () {
    it('Total price for 1 item', () => {
      expect(carService.partsToBuy([{ part: 'injectors', price: 10 }], ['injectors'])).to.equal(10);
    });

    it('Total price for 2 items', () => {
      expect(carService.partsToBuy([{ part: 'injectors', price: 10 }, { part: 'blowoff valve', price: 20 }], ['injectors', 'blowoff valve'])).to.equal(30);
    });

    it('No parts', () => {
      expect(carService.partsToBuy([], ['blowoff valve', 'injectors'])).to.equal(0);
    });

    it('Invalid input', () => {
      expect(() => carService.partsToBuy({}, 1)).to.throw('Invalid input');
      expect(() => carService.partsToBuy([], 'a')).to.throw('Invalid input');
      expect(() => carService.partsToBuy('a', [])).to.throw('Invalid input');
    });
  });
});