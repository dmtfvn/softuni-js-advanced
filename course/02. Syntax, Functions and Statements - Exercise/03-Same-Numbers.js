function solveCurTask(input) {
  let sum = 0;
  let isSameNum = true;

  input.toString().split('').map(Number).forEach((el, _, arr) => {
    if (el !== arr[0]) {
      isSameNum = false;
    }

    sum += el;
  });

  console.log(isSameNum);
  console.log(sum);
}

solveCurTask(1234);