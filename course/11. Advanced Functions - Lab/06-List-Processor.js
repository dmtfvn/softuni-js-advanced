function solveCurTask(arr) {
  let result = [];

  arr.forEach(el => {
    const [cmd, value] = el.split(' ');

    if (cmd == 'add') {
      result.push(value);
    } else if (cmd === 'remove') {
      if (result.includes(value)) {
        result = result.filter(x => x !== value);
      }
    } else if (cmd === 'print') {
      console.log(result.join(','));
    }
  });
}

solveCurTask([
  'add hello',
  'add again',
  'remove hello',
  'add again',
  'print'
]);