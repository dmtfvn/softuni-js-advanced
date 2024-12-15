function solveCurTask(arr) {
  const carsReg = new Map();

  for (const curData of arr) {
    const [brand, model, count] = curData.split(' | ');

    if (!carsReg.has(brand)) {
      carsReg.set(brand, new Map());
    }

    if (!carsReg.get(brand).has(model)) {
      carsReg.get(brand).set(model, 0);
    }

    carsReg.get(brand).set(model, carsReg.get(brand).get(model) + Number(count));
  }

  for (const [brand, models] of carsReg) {
    console.log(brand);

    for (const [m, c] of models) {
      console.log(`###${m} -> ${c}`);
    }
  }
}

solveCurTask([
  'Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10'
]);