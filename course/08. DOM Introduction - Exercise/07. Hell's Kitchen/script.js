function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  function onClick() {
    const input = document.querySelector('#inputs textarea').value;
    const bestRestaurantEl = document.querySelector('#bestRestaurant p');
    const workersEl = document.querySelector('#workers p');

    if (input === '') {
      return;
    }

    const regEx = /(?:\s\-\s|,\s)/;

    const inputData = JSON.parse(input);
    const data = inputData.map(el => el.split(regEx));

    const restaurants = {};

    for (const curArr of data) {
      const restaurantName = curArr.shift();
      const workersData = curArr.map(el => el.split(' '));

      let employees = [];

      for (const worker of workersData) {
        const [name, salary] = worker;

        employees.push({ name: name, salary: Number(salary) });
      }

      if (restaurantName in restaurants) {
        employees = employees.concat(restaurants[restaurantName].employees);
      }

      employees.sort((w1, w2) => w2.salary - w1.salary);

      const bestSalary = employees[0].salary;
      const avgSalary = employees.reduce((acc, w) => acc + w.salary, 0) / employees.length;

      restaurants[restaurantName] = {
        employees,
        bestSalary,
        avgSalary
      };
    }

    let bestAvgSalary = 0;
    let winner;

    for (const curName in restaurants) {
      if (restaurants[curName].avgSalary > bestAvgSalary) {
        winner = {
          name: curName,
          workers: restaurants[curName].employees,
          topPay: restaurants[curName].bestSalary,
          avgPay: restaurants[curName].avgSalary
        }

        bestAvgSalary = restaurants[curName].avgSalary;
      }
    }

    bestRestaurantEl.textContent = `Name: ${winner.name} Average Salary: ${winner.avgPay.toFixed(2)} Best Salary: ${winner.topPay.toFixed(2)}`;

    let finalists = [];

    winner.workers.forEach(w => {
      finalists.push(`Name: ${w.name} With Salary: ${w.salary}`);
    });

    workersEl.textContent = finalists.join(' ');
  }
}