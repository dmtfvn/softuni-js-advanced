function solveCurTask(value, op1, op2, op3, op4, op5) {
  let num = Number(value);

  const arr = [op1, op2, op3, op4, op5];

  const actionObj = {
    'chop': (el) => el / 2,
    'dice': (el) => Math.sqrt(el),
    'spice': (el) => el + 1,
    'bake': (el) => el * 3,
    'fillet': (el) => el * 0.80
  };

  arr.forEach(action => {
    num = actionObj[action](num);

    console.log(num);
  });
}

solveCurTask('9', 'dice', 'spice', 'chop', 'bake', 'fillet');