function solveCurTask(fruit, weight, money) {
  const weightKg = weight / 1000;
  const totalCost = weightKg * money;

  console.log(`I need $${totalCost.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

solveCurTask('orange', 2500, 1.80);