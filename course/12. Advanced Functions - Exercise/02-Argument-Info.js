function solveCurTask(...args) {
  const summary = {};

  for (const el of args) {
    const type = typeof el;

    console.log(`${type}: ${el}`);

    if (!summary.hasOwnProperty(type)) {
      summary[type] = 0;
    }

    summary[type] += 1;
  }

  Object
    .entries(summary)
    .sort((a, b) => b[1] - a[1])
    .forEach(el => console.log(`${el[0]} = ${el[1]}`));
}

solveCurTask('cat', 42, function () { console.log('Hello world!'); });