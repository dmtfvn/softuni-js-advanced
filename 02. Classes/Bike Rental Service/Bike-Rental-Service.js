class BikeRentalService {
  name;
  location;

  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.availableBikes = {};
  }

  addBikes(bikes) {
    for (const curBike of bikes) {
      const [brand, quantity, price] = curBike.split('-');

      if (brand in this.availableBikes) {
        this.availableBikes[brand].quantity += Number(quantity);

        if (this.availableBikes[brand].price < Number(price)) {
          this.availableBikes[brand].price = Number(price);
        }
      } else {
        this.availableBikes[brand] = {};

        this.availableBikes[brand].brand = brand;
        this.availableBikes[brand].quantity = Number(quantity);
        this.availableBikes[brand].price = Number(price);
      }
    }

    const result = [];

    for (const bike in this.availableBikes) {
      result.push(bike);
    }

    return `Successfully added ${result.join(', ')}`;
  }

  rentBikes(selectedBikes) {
    let totalPrice = 0;
    let isLowQty = false;

    for (const curBike of selectedBikes) {
      const [brand, qty] = curBike.split('-');

      if (brand in this.availableBikes) {
        if (this.availableBikes[brand].quantity < qty) {
          isLowQty = true;
          continue;
        }

        this.availableBikes[brand].quantity -= Number(qty);

        totalPrice += this.availableBikes[brand].price * Number(qty);
      } else {
        isLowQty = true;
      }
    }

    if (isLowQty) {
      return 'Some of the bikes are unavailable or low on quantity in the bike rental service.';
    }

    return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
  }

  returnBikes(returnedBikes) {
    let isOurs = true;

    for (const curBike of returnedBikes) {
      const [brand, quantity] = curBike.split('-');

      if (brand in this.availableBikes) {
        this.availableBikes[brand].quantity += Number(quantity);
      } else {
        isOurs = false;
      }
    }

    if (!isOurs) {
      return 'Some of the returned bikes are not from our selection.';
    }

    return 'Thank you for returning!';
  }

  revision() {
    const result = ['Available bikes:'];

    const sortArr = Object.entries(this.availableBikes);
    sortArr.sort((a, b) => a[1].price - b[1].price);

    for (const [brand, bikeData] of sortArr) {
      result.push(`${brand} quantity:${bikeData.quantity} price:$${bikeData.price}`);
    }

    result.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`);

    return result.join('\n');
  }
}

const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());