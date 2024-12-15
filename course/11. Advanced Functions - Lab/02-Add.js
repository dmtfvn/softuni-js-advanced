function solveCurTask(n) {
  function sum(curNum) {
    let num = n;

    return num += curNum;
  }

  return sum;
}

const add7 = solveCurTask(7);

console.log(add7(2));
console.log(add7(3));