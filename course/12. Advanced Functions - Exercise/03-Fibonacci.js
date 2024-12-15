function solveCurTask() {
  let a = 1, b = 1;

  function add() {
    const temp = a;
    a = b;
    b = temp + b;

    return temp;
  }

  return add;
}

const fib = solveCurTask();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());