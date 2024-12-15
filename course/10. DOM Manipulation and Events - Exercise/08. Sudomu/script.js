function solve() {
  let status = '';

  const msgEl = document.querySelector('#check p');
  const tableEl = document.querySelector('table');

  const [checkBtn, clrBtn] = document.querySelectorAll('button');

  checkBtn.addEventListener('click', () => {
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(el => {
      const rCell = [...el.querySelectorAll('input')].map(iR => iR.value);
      const duplicates = rCell.filter((rV, i) => rCell.indexOf(rV) !== i);

      status += (duplicates.length > 0) ? '0' : '1';
    });

    status += 'x';

    for (let i = 1; i <= 3; i++) {
      const cCell = [...tableEl.querySelectorAll(`tbody tr td:nth-child(${i}) input`)].map(iC => iC.value);
      const duplicates = cCell.filter((cV, i) => cCell.indexOf(cV) !== i);

      status += (duplicates.length > 0) ? '0' : '1';
    }

    if (status === '111x111') {
      tableEl.style.border = '2px solid green';
      msgEl.style.color = 'green';
      msgEl.textContent = 'You solve it! Congratulations!';
    } else {
      tableEl.style.border = '2px solid red';
      msgEl.style.color = 'red';
      msgEl.textContent = 'NOP! You are not done yet...';
    }

    status = '';
  });

  clrBtn.addEventListener('click', () => {
    msgEl.textContent = '';
    tableEl.style.border = '';

    [...tableEl.querySelectorAll('input[type="number"]')].forEach(input => input.value = '');
  });
}