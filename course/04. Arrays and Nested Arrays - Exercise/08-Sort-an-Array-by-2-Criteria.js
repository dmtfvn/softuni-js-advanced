function solveCurTask(arr) {
  arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  for (const el of arr) {
    console.log(el);
  }
}

solveCurTask([
  'Isacc',
  'Theodor',
  'Jack',
  'Harrison',
  'George'
]);