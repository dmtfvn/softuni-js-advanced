function solveCurTask(arr) {
  const catalog = {};

  for (const product of arr) {
    const [name, price] = product.split(' : ');

    catalog[name] = Number(price);
  }

  const newArr = Object.entries(catalog);
  newArr.sort((a, b) => a[0].localeCompare(b[0]));

  let group = '';

  for (const curEl of newArr) {
    const [name, price] = curEl;

    if (group !== name[0]) {
      group = name[0];

      console.log(group);
    }

    console.log(`  ${name}: ${price}`);
  }
}

solveCurTask([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10'
]);