function solveCurTask(arr) {
  const temp = [];

  for (let i = 0; i < arr.length; i += 2) {
    const curEl = arr[i];

    temp.push(curEl);
  }

  console.log(temp.join(' '));
}

solveCurTask(['20', '30', '40', '50', '60']);