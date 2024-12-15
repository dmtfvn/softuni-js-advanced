class Point {
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  }

  static add(a, b) {
    return new Point(a.x + b.x, a.y + b.y);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));

const p3 = new Point(1, 1);
const p4 = new Point(2, 4);

const sum = Point.add(p3, p4);

console.log(p3, p4, sum)