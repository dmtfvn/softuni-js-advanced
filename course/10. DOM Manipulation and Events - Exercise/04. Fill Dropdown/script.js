function addItem() {
  const menuEl = document.querySelector('#menu');

  const newTextEl = document.querySelector('#newItemText');
  const newValueEl = document.querySelector('#newItemValue');

  if (newTextEl.value === '' || newValueEl.value === '') {
    return;
  }

  const newOption = document.createElement('option');
  newOption.textContent = newTextEl.value;
  newOption.setAttribute('value', newValueEl.value);

  menuEl.appendChild(newOption);

  newTextEl.value = '';
  newValueEl.value = '';

  newTextEl.focus();
}