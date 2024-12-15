function solveCurTask(arr) {
  let biggestNum = Number.MIN_SAFE_INTEGER;

  return arr.reduce((acc, el) => {
    if (el >= biggestNum) {
      acc.push(el);

      biggestNum = el;
    }

    return acc;
  }, []);
}

console.log(solveCurTask([
  1,
  3,
  8,
  4,
  10,
  12,
  3,
  2,
  24
]));