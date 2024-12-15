function solveCurTask(arr) {
  const newArr = [];

  let num = 1;

  arr.forEach(el => {
    el === 'add' ? newArr.push(num) : newArr.pop();
    num++;
  });

  if (newArr.length === 0) {
    console.log('Empty');

    return;
  }

  console.log(newArr.join('\n'));
}

(solveCurTask([
  'remove',
  'remove',
  'remove'
]));