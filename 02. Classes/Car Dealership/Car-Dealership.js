class CarDealership {
  name;

  constructor(name) {
    this.name = name;
    this.availableCars = {};
    this.soldCars = {};
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error('Invalid input!');
    }

    this.availableCars[model] = {};

    this.availableCars[model].model = model;
    this.availableCars[model].horsepower = Number(horsepower);
    this.availableCars[model].price = Number(price);
    this.availableCars[model].mileage = Number(mileage);

    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    if (!this.availableCars.hasOwnProperty(model)) {
      throw new Error(`${model} was not found!`);
    }

    if (this.availableCars[model].mileage > desiredMileage) {
      const difference = Math.abs(this.availableCars[model].mileage - desiredMileage);

      if (difference <= 40000) {
        this.availableCars[model].price *= 0.95;
      } else {
        this.availableCars[model].price *= 0.9;
      }
    }

    this.soldCars[model] = {};

    this.soldCars[model].model = model;
    this.soldCars[model].horsepower = this.availableCars[model].horsepower;
    this.soldCars[model].soldPrice = this.availableCars[model].price;

    delete this.availableCars[model];

    this.totalIncome += this.soldCars[model].soldPrice;

    return `${model} was sold for ${this.soldCars[model].soldPrice.toFixed(2)}$`;
  }

  currentCar() {
    const result = ['-Available cars:'];

    const cars = Object.values(this.availableCars);

    if (cars.length === 0) {
      return 'There are no available cars';
    }

    cars.forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`));

    return result.join('\n');
  }

  salesReport(criteria) {
    const allSoldCars = Object.values(this.soldCars);

    const finalResult = [
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
      `-${allSoldCars.length} cars sold:`
    ];

    if (criteria === 'horsepower') {
      const sorted = allSoldCars.sort((a, b) => b.horsepower - a.horsepower);

      sorted.forEach(c => finalResult.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));
    } else if (criteria === 'model') {
      const sorted = allSoldCars.sort((a, b) => a.model.localeCompare(b.model));

      sorted.forEach(c => finalResult.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));
    } else {
      throw new Error('Invalid criteria!');
    }

    return finalResult.join('\n');
  }
}

const dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);

console.log(dealership.salesReport('horsepower'));