function solveCurTask(n, m) {
  const start = Number(n);
  const end = Number(m);

  let result = 0;

  for (let i = start; i <= end; i++) {
    result += i;
  }

  console.log(result);
}

solveCurTask('-8', '20');