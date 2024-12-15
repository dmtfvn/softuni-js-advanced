(function solveCurTask() {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str + this;
    }

    return this.toString();
  }

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this + str;
    }

    return this.toString();
  }

  String.prototype.isEmpty = function () {
    return !this.toString();
  }

  String.prototype.truncate = function (n) {
    if (this.length <= n) {
      return this.toString();
    }

    if (this.length < 4) {
      return '.'.repeat(n);
    }

    if (!this.includes(' ')) {
      return this.substring(0, n - 3) + '...';
    }

    const newArr = this.split(' ');
    let result = this + '...';

    while (result.length > n) {
      newArr.pop();
      result = newArr.join(' ') + '...';
    }

    return result;
  }

  String.format = function (str, ...params) {
    params.forEach(p => {
      str = str.replace(/{\d+}/, p);
    });

    return str;
  }
})();

let str = 'my string';

str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}', 'dog');
console.log(str);