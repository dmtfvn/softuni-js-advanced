function solveCurTask(arr) {
  return arr.filter((_, i) => i % 2).map(el => el * 2).reverse().join(' ');
}

console.log(solveCurTask([3, 0, 10, 4, 7, 3]));