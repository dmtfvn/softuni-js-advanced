function solveCurTask() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = Number(gasWeight);
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength) {
      super(color, gasWeight);

      this._ribbon = {
        color: ribbonColor,
        length: Number(ribbonLength)
      }
    }

    get ribbon() {
      return this._ribbon;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
      super(color, gasWeight, ribbonColor, ribbonLength);

      this._text = text;
    }

    get text() {
      return this._text;
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon
  }
}

const classes = solveCurTask();

const testBalloon = new classes.Balloon("yellow", 20.5);
const testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
const ribbon = testPartyBalloon.ribbon;

console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);