function sumTable() {
  const output = document.getElementById('sum');
  const tableRows = document.querySelectorAll('table tr');

  const rows = Array.from(tableRows).slice(1, -1);
  const cols = rows.map(el => el.children[el.children.length - 1]);

  let sum = 0;

  for (const curNum of cols) {
    sum += Number(curNum.textContent);
  }

  output.textContent = sum;
}