function extensibleObject() {
  const obj = {
    extend: function (targetObj) {
      for (const key in targetObj) {
        if (typeof targetObj[key] === 'function') {
          Object.getPrototypeOf(obj)[key] = targetObj[key];
        } else {
          obj[key] = targetObj[key];
        }
      }
    }
  };

  return obj;
}

const extendedObj = extensibleObject();

const targetObj = {
  extensionProperty: 'someString',
  extensionMethod: function () {
    console.log('Hey');
  }
}

extendedObj.extend(targetObj);