function solveCurTask(input) {
  const inputType = typeof input;

  if (inputType === 'number') {
    const circleArea = Math.PI * (input ** 2);

    console.log(circleArea.toFixed(2));
  } else {
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
  }
}

solveCurTask(5);