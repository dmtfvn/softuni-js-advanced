function solveCurTask(arr, sortBy) {
  const result = arr.toSorted((a, b) => a - b);

  if (sortBy === 'desc') {
    result.reverse();
  }

  return result;
}

console.log(solveCurTask([14, 7, 17, 6, 8], 'asc'));