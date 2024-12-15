import { expect } from "chai";
import { lottery } from "./Lottery.js";

describe('Lottery', function () {
  describe('buyLotteryTicket', function () {
    it('Invalid input', () => {
      expect(() => lottery.buyLotteryTicket(1, 2, 'a')).to.throw('Invalid input!');
      expect(() => lottery.buyLotteryTicket(1, 'a', true)).to.throw('Invalid input!');
      expect(() => lottery.buyLotteryTicket('a', 1, true)).to.throw('Invalid input!');
    });

    it('Boolean "buy" = false', () => {
      expect(() => lottery.buyLotteryTicket(1, 2, false)).to.throw('Unable to buy lottery ticket!');
    });

    it('Valid ticket purchase', () => {
      expect(lottery.buyLotteryTicket(1, 2, true)).to.equal(`You bought 2 tickets for 2$.`);
      expect(lottery.buyLotteryTicket(2, 2, true)).to.equal(`You bought 2 tickets for 4$.`);
    });
  });

  describe('checkTicket', function () {
    it('Invalid input', () => {
      expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [7, 8, 9, 10, 11])).to.throw('Invalid input!');
      expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6, 7], [7, 8, 9, 10, 11, 12, 13])).to.throw('Invalid input!');
      expect(() => lottery.checkTicket([], [])).to.throw('Invalid input!');
    });

    it('Partial match', () => {
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 0])).to.equal('Congratulations you win, check your reward!');
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 7, 0])).to.equal('Congratulations you win, check your reward!');
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 0])).to.equal('Congratulations you win, check your reward!');
    });

    it('Full match', () => {
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
    });
  });

  describe('secondChance', function () {
    it('Invalid input', () => {
      expect(() => lottery.secondChance('1', [1, 2])).to.throw('Invalid input!');
      expect(() => lottery.secondChance(1, '[]')).to.throw('Invalid input!');
      expect(() => lottery.secondChance('1', '[]')).to.throw('Invalid input!');
    });

    it('Ticket ID match', () => {
      expect(lottery.secondChance(1, [1, 2, 3])).to.equal('You win our second chance prize!');
    });

    it('No ticket ID match', () => {
      expect(lottery.secondChance(1, [2, 3, 4])).to.equal("Sorry, your ticket didn't win!");
    });
  });
});