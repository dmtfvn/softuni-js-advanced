function solveCurTask(arr) {
  const temp = [];

  for (let i = 0; i < arr.length; i++) {
    const curNum = arr[i];

    if (curNum < 0) {
      temp.unshift(curNum);
    } else {
      temp.push(curNum);
    }
  }

  console.log(temp.join('\n'))
}

solveCurTask([7, -2, 8, 9]);