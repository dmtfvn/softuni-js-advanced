function addItem() {
  const listEl = document.querySelector('#items');
  const inputEl = document.querySelector('#newItemText');

  const input = document.querySelector('#newItemText').value;

  if (!input) {
    return;
  }

  const newEl = document.createElement('li');
  newEl.textContent = input;

  listEl.appendChild(newEl);

  inputEl.value = '';
}