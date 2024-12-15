function addItem() {
  const listEl = document.querySelector('#items');
  const inputEl = document.querySelector('#newItemText');

  const input = document.querySelector('#newItemText').value;

  if (!input) {
    return;
  }

  const newEl = document.createElement('li');
  newEl.textContent = input;

  const deleteLink = document.createElement('a');
  deleteLink.setAttribute('href', '#');
  deleteLink.textContent = '[Delete]';

  newEl.appendChild(deleteLink);
  listEl.appendChild(newEl);

  function deleteEl(e) {
    const link = e.target;
    link.parentElement.remove();
  }

  deleteLink.addEventListener('click', deleteEl);

  inputEl.value = '';
}