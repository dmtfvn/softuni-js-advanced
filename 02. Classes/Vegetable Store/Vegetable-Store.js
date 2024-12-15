class VegetableStore {
  owner;
  location;

  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = {};
  }

  loadingVegetables(vegetables) {
    for (const curProduct of vegetables) {
      const [type, qty, price] = curProduct.split(' ');

      if (type in this.availableProducts) {
        this.availableProducts[type].quantity += Number(qty);

        if (this.availableProducts[type].price < Number(price)) {
          this.availableProducts[type].price = Number(price);
        }
      } else {
        this.availableProducts[type] = {};

        this.availableProducts[type].type = type;
        this.availableProducts[type].quantity = Number(qty);
        this.availableProducts[type].price = Number(price);
      }
    }

    const result = [];

    for (const curProduct in this.availableProducts) {
      result.push(curProduct);
    }

    return `Successfully added ${result.join(', ')}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;

    for (const curProduct of selectedProducts) {
      const [type, qty] = curProduct.split(' ');

      if (!this.availableProducts.hasOwnProperty(type)) {
        throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
      }

      if (qty > this.availableProducts[type].quantity) {
        throw new Error(`The quantity ${qty} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
      }

      const productCost = this.availableProducts[type].price * Number(qty);

      totalPrice += productCost;

      this.availableProducts[type].quantity -= Number(qty);
    }

    return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
  }

  rottingVegetable(type, quantity) {
    if (!this.availableProducts.hasOwnProperty(type)) {
      throw new Error(`${type} is not available in the store.`);
    }

    if (quantity > this.availableProducts[type].quantity) {
      this.availableProducts[type].quantity = 0;

      return `The entire quantity of the ${type} has been removed.`;
    } else {
      this.availableProducts[type].quantity -= quantity;

      return `Some quantity of the ${type} has been removed.`;
    }
  }

  revision() {
    const result = ['Available vegetables:'];

    const allProducts = Object.values(this.availableProducts);
    allProducts.sort((a, b) => a.price - b.price).forEach(p => result.push(`${p.type}-${p.quantity}-$${p.price}`));

    result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

    return result.join('\n');
  }
}

const vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");

console.log(vegStore.loadingVegetables([
  "Okra 2.5 3.5",
  "Beans 10 2.8",
  "Celery 5.5 2.2",
  "Celery 0.5 2.5"
]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());