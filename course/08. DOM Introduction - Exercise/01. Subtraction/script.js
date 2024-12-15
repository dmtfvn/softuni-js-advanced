function subtract() {
  const [firstNumEl, secondNumEl] = document.querySelectorAll('#wrapper input[type="text"]');

  const resultEL = document.querySelector('#result');

  const result = Number(firstNumEl.value) - Number(secondNumEl.value);

  resultEL.textContent = result;
}