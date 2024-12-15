function solveCurTask(arr) {
  const townRegister = {};

  for (const curData of arr) {
    const [city, population] = curData.split(' <-> ');

    if (!townRegister.hasOwnProperty(city)) {
      townRegister[city] = 0;
    }

    townRegister[city] += Number(population);
  }

  console.log(Object.entries(townRegister).map((tuple) => `${tuple[0]} : ${tuple[1]}`).join('\n'));
}

solveCurTask([
  'Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000'
]);