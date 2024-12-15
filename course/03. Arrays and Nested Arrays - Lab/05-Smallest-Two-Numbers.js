function solveCurTask(arr) {
  const newArr = arr.sort((a, b) => a - b);

  const portion = newArr.slice(0, 2);

  console.log(portion.join(' '));
}

solveCurTask([30, 15, 50, 5]);