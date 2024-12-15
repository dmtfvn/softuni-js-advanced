function solveCurTask(a) {
  let temp = 0;

  function recur(b) {
    temp += b;

    return recur;
  }

  recur.toString = () => temp;

  return recur(a);
}

console.log(solveCurTask(1)(6)(-3).toString());