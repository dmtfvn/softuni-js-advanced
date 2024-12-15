function validate() {
  const inputEl = document.querySelector('#email');

  const regEx = /^.+@.+\..+$/g;

  inputEl.addEventListener('change', (e) => {
    e.target.className = (!regEx.test(inputEl.value)) ? 'error' : '';
  });
}