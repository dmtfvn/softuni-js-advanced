function solveCurTask(arr) {
  const newArr = [];

  arr.sort((a, b) => a - b);

  const half = Math.floor(arr.length / 2);

  for (let i = 0; i < half; i++) {
    const curLeft = arr[i];
    const curLast = arr[(arr.length - 1) - i];

    newArr.push(curLeft);
    newArr.push(curLast);

    if (arr.length % 2 !== 0 && i + 1 === half) {
      newArr.push(arr[(arr.length - 2) - i]);
    }
  }

  return newArr;
}

console.log(solveCurTask([1, 65, 3, 52, 48, 31, -3, 18, 56]));