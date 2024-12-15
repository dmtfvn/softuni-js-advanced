class ShadyCarDealership {
  constructor(dealerName) {
    this.dealerName = dealerName;
    this.availableCars = [];
    this.soldCars = [];
    this.revenue = 0;
  }

  addCar(model, year, mileage, price) {
    if (model === '' || year < 1950 || mileage < 0 || price < 0) {
      throw new Error('Invalid car!');
    }

    const carObj = {};
    carObj.model = model;
    carObj.year = year;
    carObj.mileage = mileage;
    carObj.price = price;

    this.availableCars.push(carObj);

    return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredYear) {
    if (!this.availableCars.some(obj => obj.model === model)) {
      return `${model} was not found!`;
    }

    for (const curCar of this.availableCars) {
      if (curCar.model === model) {
        if (curCar.year < desiredYear) {
          if (desiredYear - curCar.year <= 5) {
            curCar.price -= curCar.price * 0.10;
          } else {
            curCar.price -= curCar.price * 0.20;
          }
        }

        this.revenue += curCar.price;
        this.soldCars.push(curCar);

        const curStock = this.availableCars.filter(car => car.model !== model);
        this.availableCars = curStock;

        return `${curCar.model} (${curCar.year}) was sold for ${curCar.price.toFixed(2)}$`;
      }
    }
  }

  prepareCarForSale(model) {
    if (!this.availableCars.some(obj => obj.model === model)) {
      return `${model} was not found for preparation!`;
    }

    for (const curCar of this.availableCars) {
      if (curCar.model === model) {
        curCar.mileage -= curCar.mileage * 0.50;
        curCar.price += curCar.price * 0.30;

        return `${curCar.model} (${curCar.year}) is prepared for sale with ${curCar.mileage} km. - ${curCar.price.toFixed(2)}$`;
      }
    }
  }

  salesJournal(criteria) {
    if (criteria === 'year') {
      this.soldCars.sort((a, b) => b.year - a.year);
    } else if (criteria === 'model') {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    } else {
      throw new Error('Invalid criteria!');
    }

    const sortedCars = [];

    this.soldCars.forEach(c => sortedCars.push(`${c.model} (${c.year}) / ${c.mileage} km. / ${c.price.toFixed(2)}$`));

    let result = `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$\n`;
    result += `${this.soldCars.length} cars sold:\n`;
    result += sortedCars.join('\n');

    return result.trim();
  }
}

const dealership = new ShadyCarDealership('Shady Motors');

console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
console.log(dealership.prepareCarForSale('Honda CR-V'));
console.log(dealership.prepareCarForSale('BMW X3'));
console.log(dealership.sellCar('Honda CR-V', 2012));
console.log(dealership.sellCar('BMW X3', 2012));
console.log(dealership.salesJournal('model'));