function solveCurTask(arr) {
  const products = {};

  for (let i = 0; i < arr.length; i += 2) {
    const name = arr[i];
    const calories = arr[i + 1];

    products[name] = Number(calories);
  }

  console.log(products);
}

solveCurTask(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);