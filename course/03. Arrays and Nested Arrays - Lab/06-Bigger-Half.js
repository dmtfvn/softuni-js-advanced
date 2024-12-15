function solveCurTask(arr) {
  const newArr = arr.sort((a, b) => a - b);

  const halfArr = newArr.slice(Math.floor(newArr.length / 2));

  return halfArr;
}

console.log(solveCurTask([3, 19, 14, 7, 2, 19, 6]));