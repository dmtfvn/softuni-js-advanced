function solveCurTask(row, col) {
  let mtx = [];

  let colStart = 0;
  let colEnd = col - 1;

  let rowStart = 0;
  let rowEnd = row - 1;

  let counter = 1;

  for (let i = 0; i < row; i++) {
    mtx.push([]);
  }

  while (colStart <= colEnd && rowStart <= rowEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      mtx[rowStart][i] = counter;
      counter++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      mtx[i][colEnd] = counter;
      counter++;
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      mtx[rowEnd][i] = counter;
      counter++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      mtx[i][colStart] = counter;
      counter++;
    }
    colStart++;
  }

  mtx = mtx.forEach(row => console.log(row.join(' ')));
}

solveCurTask(5, 5);