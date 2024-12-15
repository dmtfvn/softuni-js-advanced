function solveCurTask(arr) {
  const numbers = [];

  for (const curEl of arr) {
    if (typeof curEl === 'number') {
      numbers.push(curEl);
    } else {
      let result = 0;

      const pair = numbers.splice(numbers.length - 2);

      if (pair.length < 2) {
        console.log('Error: not enough operands!');

        return;
      } else {
        if (curEl === '+') {
          result = pair[0] + pair[1];
        } else if (curEl === '-') {
          result = pair[0] - pair[1];
        } else if (curEl === '*') {
          result = pair[0] * pair[1];
        } else if (curEl === '/') {
          result = pair[0] / pair[1];
        }

        numbers.push(result);
      }
    }
  }

  if (numbers.length > 1) {
    console.log('Error: too many operands!');
  } else {
    console.log(numbers[0]);
  }
}

solveCurTask([31, 2, '+', 11, '/']);