function solveCurTask(x1, y1, x2, y2) {
  function calcDistance(p1, p2, p3, p4) {
    const firstPair = (p3 - p1) ** 2;
    const secondPair = (p4 - p2) ** 2;

    const distance = Math.sqrt(firstPair + secondPair);

    if (Number.isInteger(distance)) {
      console.log(`{${p1}, ${p2}} to {${p3}, ${p4}} is valid`);
    } else {
      console.log(`{${p1}, ${p2}} to {${p3}, ${p4}} is invalid`);
    }
  }

  calcDistance(x1, y1, 0, 0);
  calcDistance(x2, y2, 0, 0);
  calcDistance(x1, y1, x2, y2);
}

solveCurTask(2, 1, 1, 1);