function deleteByEmail() {
  const input = document.querySelector('[name="email"]').value.toLocaleLowerCase();
  const inputEl = document.querySelector('[name="email"]');
  const table = document.querySelectorAll('#customers tbody tr');
  const outputEl = document.querySelector('#result');

  if (!input) {
    return;
  }

  let isFound = false;

  for (const curRow of table) {
    const email = curRow.children[1];

    if (email.textContent.toLocaleLowerCase().includes(input)) {
      curRow.remove();

      isFound = true;
    }
  }

  if (isFound) {
    outputEl.textContent = 'Deleted.';
  } else {
    outputEl.textContent = 'Not found.';
  }

  inputEl.value = '';
}