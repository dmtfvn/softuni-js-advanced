class Hex {
  value;

  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `0x${this.value.toString(16).toUpperCase()}`;
  }

  plus(number) {
    if (typeof number === 'number') {
      return new Hex(this.value + number);
    } else {
      return new Hex(this.value + number.value);
    }
  }

  minus(number) {
    if (typeof number === 'number') {
      return new Hex(this.value - number);
    } else {
      return new Hex(this.value - number.value);
    }
  }

  parse(string) {
    return parseInt(string, 16);
  }
}

const FF = new Hex(255);
console.log(FF.toString());

FF.valueOf() + 1 == 256;
const a = new Hex(10);
const b = new Hex(5);

console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));