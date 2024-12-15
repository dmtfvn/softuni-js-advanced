function solveCurTask(input = 5) {
  const varSize = input;

  let string = '';

  for (let i = 0; i < varSize; i++) {
    const star = '*';

    string += star;
  }

  const row = string.split('').join(' ');

  const rectangle = [];

  for (let j = 0; j < varSize; j++) {
    rectangle.push(row);
  }

  console.log(rectangle.join('\n'));
}

solveCurTask();