function calc() {
  const a = document.getElementById('num1');
  const b = document.getElementById('num2');
  const sum = document.getElementById('sum');

  const result = Number(a.value) + Number(b.value);

  sum.value = result;
}