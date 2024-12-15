function solveCurTask() {
  return {
    add: function (el) {
      if (typeof el !== 'number') {
        return;
      }

      this._sortList.push(el);
      this.size = this._sortList.length;
      this._sortList.sort(this._sort);
    },
    remove: function (i) {
      if (i < 0 || i >= this.size) {
        return;
      }

      this._sortList.splice(i, 1);
      this.size = this._sortList.length;
      this._sortList.sort(this._sort);
    },
    get: function (i) {
      if (i < 0 || i >= this.size) {
        return;
      }

      return this._sortList[i];
    },
    size: 0,
    _sortList: [],
    _sort: (a, b) => a - b
  }
}

const list = solveCurTask();

list.add(5);
list.add(6);
list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(1));