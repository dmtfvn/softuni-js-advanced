function solveCurTask(arr) {
  const data =
    arr
      .map(el => el.split(' | '))
      .reduce((a, b) => {
        const [town, product, price] = b.map(el => (isNaN(el) ? el : Number(el)));

        a[product] = a[product] || { price, town };

        if (a[product].price > price || a[product].town === town) {
          a[product] = { price, town };
        }

        return a;
      }, {});

  const result =
    `${Object
      .entries(data)
      .map(([name, product]) => `${name} -> ${product.price} (${product.town})`)
      .join('\n')}
  `;

  console.log(result);
}

solveCurTask([
  'Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10'
]);