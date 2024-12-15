class FlightBookingSystem {
  agencyName;

  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = {};
    this.bookings = {};
    this.bookingsCount = 0;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    if (flightNumber in this.flights) {
      return `Flight ${flightNumber} to ${destination} is already available.`;
    } else {
      this.flights[flightNumber] = {};

      this.flights[flightNumber].flightNumber = flightNumber;
      this.flights[flightNumber].destination = destination;
      this.flights[flightNumber].departureTime = departureTime;
      this.flights[flightNumber].price = Number(price);

      return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }
  }

  bookFlight(passengerName, flightNumber) {
    if (flightNumber in this.flights) {
      this.bookings[`${passengerName}_${flightNumber}`] = {};

      this.bookings[`${passengerName}_${flightNumber}`].passengerName = passengerName;
      this.bookings[`${passengerName}_${flightNumber}`].flightNumber = flightNumber;
      this.bookings[`${passengerName}_${flightNumber}`].price = this.flights[flightNumber].price;

      this.bookingsCount++;

      return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    } else {
      return `Flight ${flightNumber} is not available for booking.`;
    }
  }

  cancelBooking(passengerName, flightNumber) {
    if (`${passengerName}_${flightNumber}` in this.bookings) {
      delete this.bookings[`${passengerName}_${flightNumber}`];

      this.bookingsCount--;

      return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    } else {
      throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
    }
  }

  showBookings(criteria) {
    const bookingArr = Object.values(this.bookings);

    if (bookingArr.length === 0) {
      throw new Error('No bookings have been made yet.');
    }

    if (criteria === 'all') {
      const allArr = [`All bookings(${this.bookingsCount}):`];

      bookingArr.forEach(obj => allArr.push(`${obj.passengerName} booked for flight ${obj.flightNumber}.`));

      return allArr.join('\n');
    }

    if (criteria === 'cheap') {
      const cheapArr = ['Cheap bookings:'];

      const tempArr = bookingArr.filter(obj => obj.price <= 100);

      if (tempArr.length > 0) {
        tempArr.forEach(obj => cheapArr.push(`${obj.passengerName} booked for flight ${obj.flightNumber}.`));

        return cheapArr.join('\n');
      } else {
        return 'No cheap bookings found.';
      }
    }

    if (criteria === 'expensive') {
      const expensiveArr = ['Expensive bookings:'];

      const tempArr = bookingArr.filter(obj => obj.price > 100);

      if (tempArr.length > 0) {
        tempArr.forEach(obj => expensiveArr.push(`${obj.passengerName} booked for flight ${obj.flightNumber}.`));

        return expensiveArr.join('\n');
      } else {
        return 'No expensive bookings found.';
      }
    }
  }
}

const system = new FlightBookingSystem("TravelWorld");

console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));