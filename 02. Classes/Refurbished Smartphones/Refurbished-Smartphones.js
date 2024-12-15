class RefurbishedSmartphones {
  retailer;

  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = {};
    this.soldSmartphones = {};
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
    if (model === '' || storage < 0 || price < 0 || condition === '') {
      throw new Error('Invalid smartphone!');
    }

    this.availableSmartphones[model] = {};

    this.availableSmartphones[model].model = model;
    this.availableSmartphones[model].storage = storage;
    this.availableSmartphones[model].price = price;
    this.availableSmartphones[model].condition = condition;

    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
  }

  sellSmartphone(model, desiredStorage) {
    if (model in this.availableSmartphones) {
      if (this.availableSmartphones[model].storage < desiredStorage) {
        const difference = desiredStorage - this.availableSmartphones[model].storage;

        if (difference <= 128) {
          this.availableSmartphones[model].price -= this.availableSmartphones[model].price * 0.10;
        } else {
          this.availableSmartphones[model].price -= this.availableSmartphones[model].price * 0.20;
        }
      }
    } else {
      throw new Error(`${model} was not found!`);
    }

    this.soldSmartphones[model] = {};

    this.soldSmartphones[model].model = model;
    this.soldSmartphones[model].storage = this.availableSmartphones[model].storage;
    this.soldSmartphones[model].soldPrice = this.availableSmartphones[model].price;

    this.revenue += this.soldSmartphones[model].soldPrice;

    delete this.availableSmartphones[model];

    return `${model} was sold for ${this.soldSmartphones[model].soldPrice.toFixed(2)}$`;
  }

  upgradePhones() {
    const phones = Object.values(this.availableSmartphones);

    if (phones.length === 0) {
      throw new Error('There are no available smartphones!');
    }

    phones.map(p => p.storage *= 2);

    const result = ['Upgraded Smartphones:'];

    phones.forEach(obj => result.push(`${obj.model} / ${obj.storage} GB / ${obj.condition} condition / ${obj.price.toFixed(2)}$`));

    return result.join('\n');
  }

  salesJournal(criteria) {
    const soldPhones = Object.values(this.soldSmartphones);

    if (criteria === 'storage') {
      soldPhones.sort((a, b) => b.storage - a.storage);
    } else if (criteria === 'model') {
      soldPhones.sort((a, b) => a.model.localeCompare(b.model));
    } else {
      throw new Error('Invalid criteria!');
    }

    const result = [
      `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`,
      `${soldPhones.length} smartphones sold:`
    ];

    soldPhones.forEach(obj => result.push(`${obj.model} / ${obj.storage} GB / ${obj.soldPrice.toFixed(2)}$`));

    return result.join('\n');
  }
}

const retailer = new RefurbishedSmartphones('SecondLife Devices');

retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));