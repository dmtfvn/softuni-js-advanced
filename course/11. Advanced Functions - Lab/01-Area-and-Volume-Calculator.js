function externalArea() {
  return Math.abs(this.x * this.y);
}

function externalVol() {
  return Math.abs(this.x * this.y * this.z);
};

function solveCurTask(area, vol, jsonStr) {
  const data = JSON.parse(jsonStr);

  const result = data.map(obj => ({
    area: area.call(obj),
    volume: vol.call(obj)
  }));

  return result;
}

console.log(solveCurTask(
  externalArea,
  externalVol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
  ]`
));