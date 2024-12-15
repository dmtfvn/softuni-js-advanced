function calculator() {
  let n1;
  let n2;
  let result;

  const calcObj = {
    init(p1, p2, p3) {
      n1 = document.querySelector(`${p1}`);
      n2 = document.querySelector(`${p2}`);
      result = document.querySelector(`${p3}`);
    },
    add() {
      return result.value = Number(n1.value) + Number(n2.value);
    },
    subtract() {
      return result.value = Number(n1.value) - Number(n2.value);
    }
  };

  return calcObj;
}

const calculate = calculator();

calculate.init('#num1', '#num2', '#result');

calculate.add('#num1', '#num2', '#result');
calculate.subtract('#num1', '#num2', '#result');