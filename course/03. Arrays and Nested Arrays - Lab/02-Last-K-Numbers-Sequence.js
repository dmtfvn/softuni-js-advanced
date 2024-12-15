function solveCurTask(n, k) {
  const sequence = [1];

  for (let i = 1; i < n; i++) {
    const cloneArr = sequence.slice(-k);

    let sum = 0;

    for (const curNum of cloneArr) {
      sum += curNum;
    }

    sequence.push(sum);
  }

  return sequence;
}

console.log(solveCurTask(6, 3));