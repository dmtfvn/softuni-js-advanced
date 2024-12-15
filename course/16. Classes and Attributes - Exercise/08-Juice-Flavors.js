function solveCurTask(arr) {
  const juices = new Map();
  const bottlesOfJuice = new Map();

  for (const curData of arr) {
    const [flavor, qty] = curData.split(' => ');

    if (!juices.has(flavor)) {
      juices.set(flavor, 0);
    }

    juices.set(flavor, juices.get(flavor) + Number(qty));

    if (juices.get(flavor) >= 1000) {
      const bottles = parseInt(juices.get(flavor) / 1000);

      if (!bottlesOfJuice.has(flavor)) {
        bottlesOfJuice.set(flavor, 0);
      }

      juices.set(flavor, juices.get(flavor) - bottles * 1000);
      bottlesOfJuice.set(flavor, bottlesOfJuice.get(flavor) + bottles);
    }
  }

  for (const [juiceName, juiceQuantity] of bottlesOfJuice) {
    console.log(`${juiceName} => ${juiceQuantity}`);
  }
}

solveCurTask([
  'Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789'
]);