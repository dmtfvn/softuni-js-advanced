function solveCurTask(arr, start, end) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input element is not an array');
  }

  if (start < 0) {
    start = 0;
  }

  if (end > arr.length - 1) {
    end = arr.length - 1;
  }

  let result = 0;

  for (let i = start; i <= end; i++) {
    result += Number(arr[i]);
  }

  return result;
}

try {
  console.log(solveCurTask([10, 20, 30, 40, 50, 60], 3, 300));
  console.log(solveCurTask([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
  console.log(solveCurTask([10, 'twenty', 30, 40], 0, 2));
  console.log(solveCurTask([], 1, 2));
  console.log(solveCurTask('text', 0, 2));
} catch (err) {
  console.log('An operation encountered some error!');
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}