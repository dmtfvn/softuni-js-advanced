class Garden {
  spaceAvailable;

  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = {};
    this.storage = {};
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error('Not enough space in the garden.');
    }

    this.spaceAvailable -= spaceRequired;

    this.plants[plantName] = {};

    this.plants[plantName].plantName = plantName;
    this.plants[plantName].spaceRequired = spaceRequired;
    this.plants[plantName].ripe = false;
    this.plants[plantName].quantity = 0;

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    if (!this.plants.hasOwnProperty(plantName)) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (this.plants[plantName].ripe === true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }

    this.plants[plantName].ripe = true;
    this.plants[plantName].quantity += quantity;

    if (this.plants[plantName].quantity === 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    }

    if (this.plants[plantName].quantity > 1) {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    if (!this.plants.hasOwnProperty(plantName)) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (this.plants[plantName].ripe === false) {
      throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
    }

    this.spaceAvailable += this.plants[plantName].spaceRequired;

    this.storage[plantName] = {};

    this.storage[plantName].plantName = plantName;
    this.storage[plantName].quantity = this.plants[plantName].quantity;

    delete this.plants[plantName];

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    const result = [`The garden has ${this.spaceAvailable} free space left.`];

    const sortPlants = Object.values(this.plants).sort((a, b) => a.plantName.localeCompare(b.plantName));

    const gardenPlants = [];

    sortPlants.forEach(p => gardenPlants.push(p.plantName));

    const plantsInGarden = `Plants in the garden: ${gardenPlants.join(', ')}`;

    result.push(plantsInGarden);

    const availablePlants = Object.values(this.storage);

    if (availablePlants.length > 0) {
      const storagePlants = [];

      availablePlants.forEach(p => storagePlants.push(`${p.plantName} (${p.quantity})`));

      const plantsInStorage = `Plants in storage: ${storagePlants.join(', ')}`;

      result.push(plantsInStorage);
    } else {
      result.push('Plants in storage: The storage is empty.');
    }

    return result.join('\n');
  }
}

const myGarden = new Garden(250);

console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());