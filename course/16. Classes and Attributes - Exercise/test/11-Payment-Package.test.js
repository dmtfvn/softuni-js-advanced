import { expect } from "chai";
import { PaymentPackage } from "../11-Payment-Package.js";

describe('Payment Package', function () {
  let inst;

  it('Constructor', () => {
    inst = new PaymentPackage('abc', 123);
    expect(inst._name).to.equal('abc');
    expect(inst._value).to.equal(123);
    expect(inst._VAT).to.equal(20);
    expect(inst._active).to.equal(true);
  });

  it('Name', () => {
    inst = new PaymentPackage('name', 1);
    expect(inst.name).to.equal('name');

    inst.name = 'Dimi';
    expect(inst.name).to.equal('Dimi');

    expect(() => inst.name = '').to.throw('Name must be a non-empty string');
    expect(() => inst.name = 1).to.throw('Name must be a non-empty string');
  });

  it('VAT', () => {
    inst = new PaymentPackage('vat', 20);
    expect(inst.VAT).to.equal(20);

    inst.VAT = 40;
    expect(inst.VAT).to.equal(40);

    expect(() => inst.VAT = -2).to.throw('VAT must be a non-negative number');
    expect(() => inst.VAT = '1').to.throw('VAT must be a non-negative number');
    expect(() => inst.VAT = 'abc').to.throw('VAT must be a non-negative number');
    expect(() => inst.VAT = undefined).to.throw('VAT must be a non-negative number');
  });

  it('Value', () => {
    inst = new PaymentPackage('value', 1);
    expect(inst.value).to.equal(1);

    inst.value = 10;
    expect(inst.value).to.equal(10);

    expect(() => inst.value = -2).to.throw('Value must be a non-negative number');
    expect(() => inst.value = '2').to.throw('Value must be a non-negative number');
    expect(() => inst.value = 0).to.not.throw();
  });

  it('Active', () => {
    inst = new PaymentPackage('active', 1);
    expect(inst.active).to.equal(true);

    inst.active = false;
    expect(inst.active).to.equal(false);

    expect(() => inst.active = -1).to.throw('Active status must be a boolean');
    expect(() => inst.active = '1').to.throw('Active status must be a boolean');
  });

  it('ToString', () => {
    inst = new PaymentPackage('toString', 1);

    function getString(name, value, active = true, VAT = 20) {
      return [
        `Package: ${name}` + (active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${value}`,
        `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
      ].join('\n');
    }

    expect(inst.toString()).to.equal(getString('toString', 1));
    inst.active = false;
    expect(inst.toString()).to.equal(getString('toString', 1, false, 20));
    inst.VAT = 100;
    expect(inst.toString()).to.equal(getString('toString', 1, false, 100));
    inst.name = 'Dudi';
    expect(inst.toString()).to.equal(getString('Dudi', 1, false, 100));
    inst.value = 2;
    expect(inst.toString()).to.equal(getString('Dudi', 2, false, 100));
  });
});