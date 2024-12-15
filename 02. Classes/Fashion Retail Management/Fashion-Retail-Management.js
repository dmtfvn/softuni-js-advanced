class FashionRetailInventory {
  storehouse;
  location;

  constructor(storehouse, location) {
    this.storehouse = storehouse;
    this.location = location;
    this.productStock = {};
  }

  addProduct(productName, size, quantity, price) {
    if (`${productName}_${size}` in this.productStock) {
      this.productStock[`${productName}_${size}`].quantity += quantity;

      return `You added ${quantity} more pieces of product ${productName} size ${size}`;
    } else {
      this.productStock[`${productName}_${size}`] = {};
      this.productStock[`${productName}_${size}`].productName = productName;
      this.productStock[`${productName}_${size}`].size = size;
      this.productStock[`${productName}_${size}`].quantity = quantity;
      this.productStock[`${productName}_${size}`].price = price;

      return `The product ${productName}, size ${size} was successfully added to the inventory`;
    }
  }

  sendProduct(productName, size) {
    if (`${productName}_${size}` in this.productStock) {
      delete this.productStock[`${productName}_${size}`];

      return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    } else {
      throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
    }
  }

  findProductsBySize(size) {
    const productList = [];

    for (const curItem in this.productStock) {
      if (this.productStock[curItem].size === size) {
        productList.push(`${this.productStock[curItem].productName}-${this.productStock[curItem].quantity} pieces`);
      }
    }

    if (productList.length > 0) {
      return productList.join(', ');
    } else {
      return 'There are no products available in that size';
    }
  }

  listProducts() {
    const productsArr = Object.values(this.productStock);
    productsArr.sort((a, b) => a.productName.localeCompare(b.productName));

    if (productsArr.length > 0) {
      const tempArr = [`${this.storehouse} storehouse in ${this.location} available products:`];

      productsArr.forEach(p => tempArr.push(`${p.productName}/Size:${p.size}/Quantity:${p.quantity}/Price:${p.price}$`));

      return tempArr.join('\n');
    } else {
      return `${this.storehouse} storehouse is empty`;
    }
  }
}

const storeHouse = new FashionRetailInventory("East", "Milano");

console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());