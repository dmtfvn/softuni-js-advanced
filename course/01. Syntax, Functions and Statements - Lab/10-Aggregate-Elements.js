function solveCurTask(input) {
  function aggregate(arr, initVal, func) {
    let result = initVal;

    for (let i = 0; i < arr.length; i++) {
      result = func(result, arr[i]);
    }

    console.log(result);
  }

  aggregate(input, 0, (a, b) => a + b);
  aggregate(input, 0, (a, b) => a + 1 / b);
  aggregate(input, '', (a, b) => a + b);
}

solveCurTask([1, 2, 3]);