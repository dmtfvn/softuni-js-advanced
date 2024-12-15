function solveCurTask(arr) {
  return Number(arr.shift()) + Number(arr.pop());
}

console.log(solveCurTask(['20', '30', '40']));