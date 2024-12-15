function solveCurTask(mtx) {
  let counter = 0;

  for (let row = 0; row < mtx.length - 1; row++) {
    if (mtx[row][0] === mtx[row + 1][0]) {
      counter++;
    }
  }

  for (let row = 0; row < mtx.length - 1; row++) {
    for (let col = 1; col < mtx[row].length; col++) {
      if (mtx[row][col] === mtx[row][col - 1]) {
        counter++;
      }

      if (mtx[row][col] === mtx[row + 1][col]) {
        counter++;
      }
    }
  }

  for (let row = 0; row < mtx[mtx.length - 1].length; row++) {
    if (mtx[mtx.length - 1][row] === mtx[mtx.length - 1][row + 1]) {
      counter++;
    }
  }

  return counter;
}

console.log(solveCurTask([
  ['2', '2', '5', '7', '4'],
  ['4', '0', '5', '3', '4'],
  ['2', '5', '5', '4', '2']
]));