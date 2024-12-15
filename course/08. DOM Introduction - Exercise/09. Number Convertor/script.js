function solve() {
  const toSelectEl = document.querySelector('#selectMenuTo');
  const resultEl = document.querySelector('#result');

  const selectOptionBinary = document.createElement('option');
  selectOptionBinary.setAttribute('value', 'binary');
  selectOptionBinary.textContent = 'Binary';

  const selectOptionHex = document.createElement('option');
  selectOptionHex.setAttribute('value', 'hexadecimal');
  selectOptionHex.textContent = 'Hexadecimal';

  toSelectEl.appendChild(selectOptionBinary);
  toSelectEl.appendChild(selectOptionHex);

  const convertBtn = document.querySelector('#container button');
  convertBtn.addEventListener('click', () => {
    const input = Number(document.querySelector('#input').value);

    if (input === '') {
      return;
    }

    if (toSelectEl.value === 'binary') {
      resultEl.value = input.toString(2);
    } else if (toSelectEl.value === 'hexadecimal') {
      resultEl.value = input.toString(16).toUpperCase();
    }
  });
}