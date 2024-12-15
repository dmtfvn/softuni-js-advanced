function solveCurTask(arr) {
  const [width, height, x, y] = arr;

  const mtx = [];

  for (let i = 0; i < width; i++) {
    mtx.push([]);
  }

  for (let row = 0; row < width; row++) {
    for (let col = 0; col < height; col++) {
      const xRow = Math.abs(row - x);
      const yCol = Math.abs(col - y);

      mtx[row][col] = Math.max(xRow, yCol) + 1;
    }
  }

  console.log(mtx.map(row => row.join(' ')).join('\n'));
}

solveCurTask([5, 5, 2, 2]);