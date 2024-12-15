function solveCurTask() {
  class Figure {
    constructor(units = 'cm') {
      this.units = units;
    }

    changeUnits(value) {
      this.units = value;
    }

    scaleUnits(param) {
      switch (this.units) {
        case 'mm':
          param *= 10;
          break;
        case 'cm':
          break;
        case 'm':
          param /= 10;
          break;
        default:
          break;
      }

      return param;
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(radius, units) {
      super(units);

      this._radius = radius;
    }

    get radius() {
      return this.scaleUnits(this._radius);
    }

    get area() {
      return Math.PI * this.radius ** 2;
    }

    toString() {
      return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);

      this._width = width;
      this._height = height;
    }

    get width() {
      return this.scaleUnits(this._width);
    }

    get height() {
      return this.scaleUnits(this._height);
    }

    get area() {
      return this.width * this.height;
    }

    toString() {
      return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
    }
  }

  return {
    Figure,
    Circle,
    Rectangle
  };
}

const classes = solveCurTask();

const c = new classes.Circle(5, 'cm');
console.log(c.area);
console.log(c.toString());

const r = new classes.Rectangle(3, 4, 'mm');
console.log(r.area);
console.log(r.toString());

r.changeUnits('cm');
console.log(r.area);
console.log(r.toString());

c.changeUnits('mm');
console.log(c.area);
console.log(c.toString());