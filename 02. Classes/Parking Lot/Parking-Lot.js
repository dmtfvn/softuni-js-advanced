class ParkingLot {
  totalSpaces;
  hourlyRate;

  constructor(totalSpaces, hourlyRate) {
    this.totalSpaces = totalSpaces;
    this.hourlyRate = hourlyRate;
    this.availableSpaces = this.totalSpaces;
    this.parkedVehicles = {};
    this.revenue = 0;
  }

  parkVehicle(licensePlate) {
    if (this.availableSpaces > 0) {
      if (licensePlate in this.parkedVehicles) {
        return `Vehicle with license plate ${licensePlate} is already parked.`;
      } else {
        this.availableSpaces--;

        this.parkedVehicles[licensePlate] = {};
        this.parkedVehicles[licensePlate].licensePlate = licensePlate;

        return `Vehicle with license plate ${licensePlate} parked successfully.`;
      }
    } else {
      return 'The parking lot is full. No available spaces.';
    }
  }

  unparkVehicle(licensePlate, hoursParked) {
    if (!this.parkedVehicles.hasOwnProperty(licensePlate)) {
      return `No vehicle found with license plate ${licensePlate}.`
    }

    const parkingFee = hoursParked * this.hourlyRate;

    this.revenue += parkingFee;

    this.availableSpaces++;

    delete this.parkedVehicles[licensePlate];

    return `Vehicle with license plate ${licensePlate} has been unparked. Parking fee: $${parkingFee}. Duration: ${hoursParked} hours.`;
  }

  showAvailableSpaces() {
    return `Available parking spaces: ${this.availableSpaces} out of ${this.totalSpaces}.`;
  }

  listParkedVehicles() {
    const curParkedVehicles = ['Currently parked vehicles:'];

    const allVehicles = Object.values(this.parkedVehicles);

    if (allVehicles.length === 0) {
      return 'No vehicles currently parked.';
    }

    allVehicles.forEach(v => curParkedVehicles.push(`A vehicle with registration number ${v.licensePlate} is in the parking lot.`));

    return curParkedVehicles.join('\n');
  }

  getTotalRevenue() {
    return `Total revenue earned from parking fees: $${this.revenue.toFixed(2)}`;
  }
}

const parkingLot = new ParkingLot(3, 5);

console.log(parkingLot.parkVehicle("ABC123"));
console.log(parkingLot.parkVehicle("XYZ789"));
console.log(parkingLot.unparkVehicle("ABC123", 4));
console.log(parkingLot.unparkVehicle("XYZ789", 24));
console.log(parkingLot.getTotalRevenue());