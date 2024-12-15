function solveCurTask(mtx) {
  const rowSum = [];
  const colSum = [];

  for (let row = 0; row < mtx.length; row++) {
    const curRow = mtx[row];

    const curRowSum = curRow.reduce((acc, el) => acc + el);
    rowSum.push(curRowSum);

    for (let col = 0; col < curRow.length; col++) {
      const curCol = curRow[col];

      if (colSum.length < curRow.length) {
        colSum.push(curCol);
      } else {
        colSum[col] += curCol;
      }
    }
  }

  const mergedArrays = [...rowSum, ...colSum];

  return mergedArrays.every(el => el === mergedArrays[0]);
}

console.log(solveCurTask([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5]
]));