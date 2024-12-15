function solveCurTask(arr) {
  const data = {};

  const modifier = {
    create(name, inherits, pName) {
      data[name] = inherits ? Object.create(data[pName]) : {};
    },
    set(name, key, value) {
      data[name][key] = value;
    },
    print(name) {
      const entry = [];

      for (const key in data[name]) {
        entry.push(`${key}:${data[name][key]}`);
      }

      console.log(entry.join(','));
    }
  }

  arr.forEach(el => {
    const [cmd, name, key, value] = el.split(' ');

    modifier[cmd](name, key, value);
  })
}

solveCurTask([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2'
]);