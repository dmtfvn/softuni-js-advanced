class Hotel {
  initialBudget;

  constructor(initialBudget) {
    this.initialBudget = initialBudget;
    this.roomAvailability = {};
    this.supplyStock = {};
  }

  restockSupplies(supplies) {
    const result = [];

    for (const curSupply of supplies) {
      const [name, qty, price] = curSupply.split(' ');

      if (name in this.supplyStock) {
        this.supplyStock[name] += qty;
      } else {
        if (Number(price) <= this.initialBudget) {
          this.supplyStock[name] = Number(qty);
          this.initialBudget -= Number(price);

          result.push(`Successfully stocked ${qty} ${name}`);
        } else {
          result.push(`There was not enough money to restock ${qty} ${name}`);
        }
      }
    }

    return result.join('\n');
  }

  addRoomType(roomType, neededSupplies, pricePerNight) {
    if (roomType in this.roomAvailability) {
      return `The ${roomType} is already available in our hotel, try something different.`;
    } else {
      this.roomAvailability[roomType] = {};
      this.roomAvailability[roomType].roomType = roomType;
      this.roomAvailability[roomType].supplies = {};
      this.roomAvailability[roomType].price = pricePerNight;

      for (const curSupply of neededSupplies) {
        const [supp, qty] = curSupply.split(' ');

        this.roomAvailability[roomType].supplies[supp] = Number(qty);
      }
    }

    const roomTypeCount = Object.values(this.roomAvailability);

    return `Great idea! Now with the ${roomType}, we have ${roomTypeCount.length} types of rooms available, any other ideas?`;
  }

  showAvailableRooms() {
    const allRoomTypes = [];

    for (const room in this.roomAvailability) {
      allRoomTypes.push(`${this.roomAvailability[room].roomType} - $ ${this.roomAvailability[room].price}`);
    }

    if (allRoomTypes.length === 0) {
      return 'Our rooms are not ready yet, please come back later...';
    } else {
      return allRoomTypes.join('\n');
    }
  }

  bookRoom(roomType) {
    if (!this.roomAvailability.hasOwnProperty(roomType)) {
      return `There is no ${roomType} available, would you like to book another room?`;
    }

    const roomDetails = this.roomAvailability[roomType];

    for (const [supply, reqQty] of Object.entries(roomDetails.supplies)) {
      if (!this.supplyStock.hasOwnProperty(supply) || this.supplyStock[supply] < reqQty) {
        return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
      }
    }

    return `Your booking for ${roomType} has been confirmed! The price is $${roomDetails.price} per night.`;
  }
}

const hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));