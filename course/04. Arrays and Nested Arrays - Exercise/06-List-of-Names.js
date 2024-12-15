function solveCurTask(arr) {
  arr.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < arr.length; i++) {
    const curEl = arr[i];

    console.log(`${i + 1}.${curEl}`);
  }
}

solveCurTask(["John", "Bob", "Christina", "Ema"]);