function solveCurTask(arr, sortBy) {
  const sortOptions = ['destination', 'price', 'status'];
  const tickets = [];

  if (!Array.isArray(arr) || typeof sortBy !== 'string') {
    throw new Error('Invalid argument for one or more input data');
  }

  if (sortOptions.indexOf(sortBy) === -1) {
    throw new Error(`Invalid sort type. The valid options are: ${sortOptions.join(', ')}`);
  }

  class Ticket {
    destination;
    price;
    status;

    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }

    static sort(tickets, sortBy) {
      if (sortBy === 'price') {
        tickets.sort((a, b) => a[sortBy] - b[sortBy]);
      } else {
        tickets.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }
    }
  }

  for (const curData of arr) {
    const [destination, price, curStatus] = curData.split('|');

    const curTicket = new Ticket(destination, Number(price), curStatus);

    tickets.push(curTicket);
  }

  Ticket.sort(tickets, sortBy);

  return tickets;
}

try {
  console.log(solveCurTask([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
  ));
} catch (err) {
  console.log(err.message);
}