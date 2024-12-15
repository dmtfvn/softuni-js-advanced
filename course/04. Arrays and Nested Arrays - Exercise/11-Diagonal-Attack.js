function solveCurTask(mtx) {
  const newMtx = [];

  for (const row of mtx) {
    const curRow = row.split(' ').map(Number);
    newMtx.push(curRow);
  }

  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let row = 0; row < newMtx.length; row++) {
    diagonal1 += newMtx[row][row];
    diagonal2 += newMtx[row][(newMtx.length - 1) - row];
  }

  let result;

  if (diagonal1 === diagonal2) {
    for (let row = 0; row < newMtx.length; row++) {
      const curRow = newMtx[row];

      for (let col = 0; col < curRow.length - 1 - row; col++) {
        if (row !== col) {
          newMtx[row][col] = diagonal1;
        }
      }
    }

    for (let row = newMtx.length - 1; row > 0; row--) {
      const curRow = newMtx[row];

      for (let col = curRow.length - 1; col >= newMtx.length - row; col--) {
        if (row !== col) {
          newMtx[row][col] = diagonal1;
        }
      }
    }

    result = newMtx.map(row => row.join(' '));
  } else {
    result = newMtx.map(row => row.join(' '));
  }

  console.log(result.join('\n'));
}

solveCurTask([
  '5 3 12 3 1',
  '11 4 23 2 5',
  '101 12 3 21 10',
  '1 4 5 2 2',
  '5 22 33 11 1'
]);