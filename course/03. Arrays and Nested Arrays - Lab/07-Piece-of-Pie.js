function solveCurTask(arr, start, end) {
  const pieArr = [];

  let firstIndex = arr.indexOf(start);
  let lastIndex = arr.indexOf(end);

  for (let i = firstIndex; i <= lastIndex; i++) {
    pieArr.push(arr[i]);
  }

  return pieArr;
}

console.log(solveCurTask([
  'Pumpkin Pie',
  'Key Lime Pie',
  'Cherry Pie',
  'Lemon Meringue Pie',
  'Sugar Cream Pie'],
  'Key Lime Pie',
  'Lemon Meringue Pie'
));