function solveCurTask(input) {
  let biggestEl = Number.MIN_SAFE_INTEGER;

  for (const row of input) {
    for (const col of row) {

      if (col > biggestEl) {
        biggestEl = col;
      }
    }
  }

  return biggestEl;
}

console.log(solveCurTask([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4]
]));