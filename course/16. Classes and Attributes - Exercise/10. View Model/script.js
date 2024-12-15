class Textbox {
  selector;
  regex;

  constructor(selector, regex) {
    this._elements = document.querySelectorAll(selector);
    this._invalidSymbols = regex;
    [...this.elements].forEach(el => el.addEventListener('change', () => this.value = el.value));
  }

  get elements() {
    return this._elements;
  }

  get value() {
    return this.elements[0].value;
  }

  set value(v) {
    [...this._elements].forEach(el => el.value = v);
  }

  isValid() {
    return !this._invalidSymbols.test(this.elements[0].value);
  }
}

const textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
console.log('textbox.isValid()');
console.log(textbox.isValid());

const inputs = document.getElementsByClassName('textbox')[0];
inputs.addEventListener('input', function () { console.log(textbox.value); });