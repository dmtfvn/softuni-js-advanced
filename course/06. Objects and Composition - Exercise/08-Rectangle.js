function solveCurTask(width, height, color) {
  const obj = {};

  obj.width = width;
  obj.height = height;

  const objColor = color[0].toUpperCase() + color.substring(1);

  obj.color = objColor;

  obj.calcArea = () => obj.width * obj.height;

  return obj;
}

const rect = solveCurTask(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());