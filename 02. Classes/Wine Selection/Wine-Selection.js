class WineSelection {
  space;

  constructor(space) {
    this.space = space;
    this.wines = {};
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space === 0) {
      throw new Error('Not enough space in the cellar.');
    }

    this.wines[wineName] = {};
    this.wines[wineName].wineName = wineName;
    this.wines[wineName].wineType = wineType;
    this.wines[wineName].price = price;
    this.wines[wineName].paid = false;

    this.space--;

    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    if (wineName in this.wines) {
      if (this.wines[wineName].paid === true) {
        throw new Error(`${wineName} has already been paid.`);
      } else {
        this.wines[wineName].paid = true;

        this.bill += this.wines[wineName].price;

        return `You bought a ${wineName} for a ${price}$.`;
      }
    } else {
      throw new Error(`${wineName} is not in the cellar.`);
    }
  }

  openBottle(wineName) {
    if (wineName in this.wines) {
      if (this.wines[wineName].paid === false) {
        throw new Error(`${wineName} need to be paid before open the bottle.`);
      }

      delete this.wines[wineName];

      return `You drank a bottle of ${wineName}.`;
    } else {
      throw new Error('The wine, you\'re looking for, is not found.');
    }
  }

  cellarRevision(wineType) {
    const arrOfWines = Object.values(this.wines);

    if (wineType === undefined) {
      const result = [
        `You have space for ${this.space} bottles more.`,
        `You paid ${this.bill}$ for the wine.`
      ];

      arrOfWines.sort((a, b) => a.wineName.localeCompare(b.wineName));

      for (const curWine of arrOfWines) {
        const booleanResult = (curWine.paid === true) ? 'Has Paid' : 'Not Paid';

        result.push(`${curWine.wineName} > ${curWine.wineType} - ${booleanResult}.`);
      }

      return result.join('\n');
    } else {
      for (const curWine of arrOfWines) {
        const booleanResult = (curWine.paid === true) ? 'Has Paid' : 'Not Paid';

        if (curWine.wineType === wineType) {
          return `${curWine.wineName} > ${curWine.wineType} - ${booleanResult}.`;
        }
      }

      throw new Error(`There is no ${wineType} in the cellar.`);
    }
  }
}

const selection = new WineSelection(5);

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());