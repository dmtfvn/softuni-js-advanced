function solveCurTask() {
  let str = '';

  function append(value) {
    str += value;
  }

  function removeStart(n) {
    str = str.slice(n);
  }

  function removeEnd(n) {
    str = str.slice(0, -n);
  }

  function print() {
    console.log(str);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print
  };
}

const objFunc = solveCurTask();

objFunc.append('hello');
objFunc.append('again');
objFunc.removeStart(3);
objFunc.removeEnd(4);
objFunc.print();