function validate() {
  const inputEl = document.querySelector('#email');

  const regEx = /(?:[a-z]+\@[a-z]+\.[a-z]+)/;

  inputEl.addEventListener('change', () => {
    if (!regEx.test(inputEl.value)) {
      inputEl.classList.add('error');
    } else {
      inputEl.classList.remove('error');
    }
  });
}