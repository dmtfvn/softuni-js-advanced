(function solveCurTask() {
  Array.prototype.last = function () {
    return [...this].pop();
  }

  Array.prototype.skip = function (num) {
    if (num < 0 || num > this.length - 1) return;

    return this.slice(num);
  }

  Array.prototype.take = function (num) {
    if (num < 0 || num > this.length - 1) return;

    return this.slice(0, num);
  }

  Array.prototype.sum = function () {
    return this.reduce((acc, a) => acc + a, 0);
  }

  Array.prototype.average = function () {
    return this.sum() / this.length;
  }
})();