function search() {
  const input = document.querySelector('#searchText').value;

  const listEl = document.querySelector('#towns');
  const inputEl = document.querySelector('#searchText');
  const resultEl = document.querySelector('#result');

  if (input === '') {
    return;
  }

  const townsArr = Array.from(listEl.children);
  const towns = townsArr.map(el => el.textContent);

  townsArr.map(el => {
    el.style.fontWeight = 'normal';
    el.style.textDecoration = 'none';
  });

  const result = [];

  for (let i = 0; i < towns.length; i++) {
    if (towns[i].includes(input)) {
      result.push(i);
    }
  }

  result.map(i => {
    townsArr[i].style.fontWeight = 'bold';
    townsArr[i].style.textDecoration = 'underline';
  });

  inputEl.value = '';

  resultEl.textContent = `${result.length} matches found`;
}