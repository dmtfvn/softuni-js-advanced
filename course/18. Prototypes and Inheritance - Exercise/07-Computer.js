function solveCurTask() {
  class Peripherals {
    constructor(manufacturer) {
      if (new.target === Peripherals) {
        throw new TypeError;
      }

      this.manufacturer = manufacturer;
    }
  }

  class Battery extends Peripherals {
    constructor(manufacturer, expectedLife) {
      super(manufacturer);

      this.expectedLife = expectedLife;
    }
  }

  class Keyboard extends Peripherals {
    constructor(manufacturer, responseTime) {
      super(manufacturer);

      this.responseTime = responseTime;
    }
  }

  class Monitor extends Peripherals {
    constructor(manufacturer, width, height) {
      super(manufacturer);

      this.width = width;
      this.height = height;
    }
  }

  class Computer extends Peripherals {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) {
        throw new TypeError;
      }

      super(manufacturer);

      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }

  class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);

      this.weight = weight;
      this.color = color;
      this.battery = battery;
    }

    get battery() {
      return this._battery;
    }

    set battery(value) {
      if (!(value instanceof Battery)) {
        throw new TypeError;
      }

      this._battery = value;
    }
  }

  class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);

      this.keyboard = keyboard;
      this.monitor = monitor;
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(value) {
      if (!(value instanceof Keyboard)) {
        throw new TypeError;
      }

      this._keyboard = value;
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(value) {
      if (!(value instanceof Monitor)) {
        throw new TypeError;
      }

      this._monitor = value;
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop
  }
}

let classes = solveCurTask();

let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);

let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);