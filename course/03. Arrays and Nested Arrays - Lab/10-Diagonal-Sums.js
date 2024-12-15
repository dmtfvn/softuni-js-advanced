function solveCurTask(mtx) {
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < mtx.length; i++) {
    diagonal1 += mtx[i][i];
    diagonal2 += mtx[i][(mtx.length - 1) - i];
  }

  console.log(diagonal1, diagonal2);
}

solveCurTask([
  [20, 40],
  [10, 60]
]);