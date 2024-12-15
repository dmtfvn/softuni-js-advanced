function solveCurTask(arr, num) {
  for (let i = 0; i < num; i++) {
    const lastEl = arr.pop();

    arr.unshift(lastEl);
  }

  console.log(arr.join(' '));
}

solveCurTask([
  'Banana',
  'Orange',
  'Coconut',
  'Apple'],
  15
);