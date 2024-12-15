class OnlineShop {
  warehouseSpace;

  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = {};
    this.sales = {};
  }

  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw new Error('Not enough space in the warehouse.');
    } else {
      this.products[product] = quantity;

      this.warehouseSpace -= spaceRequired;

      return `The ${product} has been successfully delivered in the warehouse.`;
    }
  }

  quantityCheck(product, minimalQuantity) {
    if (minimalQuantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }

    if (minimalQuantity <= this.products[product]) {
      return `You have enough from product ${product}.`;
    }

    if (product in this.products) {
      const difference = minimalQuantity - this.products[product];

      this.products[product] = minimalQuantity;

      return `You added ${difference} more from the ${product} products.`;
    } else {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
  }

  sellProduct(product) {
    if (product in this.products) {
      this.products[product]--;

      this.sales[product] = 1;

      return `The ${product} has been successfully sold.`;
    } else {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
  }

  revision() {
    const salesInfo = [];

    const sales = Object.keys(this.sales).length;

    if (sales > 0) {
      salesInfo.push(`You sold ${sales} products today!`);
      salesInfo.push('Products in the warehouse:');

      for (const product in this.products) {
        salesInfo.push(`${product}-${this.products[product]} more left`);
      }

      return salesInfo.join('\n');
    } else {
      throw new Error('There are no sales today!');
    }
  }
}

const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());