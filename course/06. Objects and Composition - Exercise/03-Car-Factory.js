function solveCurTask(obj) {
  const car = {};

  const small = { power: 90, volume: 1800 };
  const normal = { power: 120, volume: 2400 };
  const monster = { power: 200, volume: 3500 };

  car.model = obj.model;

  if (obj.power <= 90) {
    car.engine = small;
  } else if (obj.power <= 120) {
    car.engine = normal;
  } else if (obj.power <= 200) {
    car.engine = monster;
  }

  if (obj.carriage === 'hatchback') {
    car.carriage = { type: obj.carriage, color: obj.color };
  } else if (obj.carriage === 'coupe') {
    car.carriage = { type: obj.carriage, color: obj.color };
  }

  const tyresSize = obj.wheelsize % 2 === 0 ? obj.wheelsize - 1 : obj.wheelsize;
  car.wheels = new Array(4).fill(tyresSize);

  return car;
}

console.log(solveCurTask({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14
}));