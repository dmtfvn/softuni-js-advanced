function solveCurTask(arr, num) {
  const newArr = [];

  for (let i = 0; i < arr.length; i += num) {
    newArr.push(arr[i]);
  }

  return newArr;
}

solveCurTask([
  '5',
  '20',
  '31',
  '4',
  '20'],
  2
);