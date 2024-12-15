function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    const input = document.querySelector('#searchField').value.trim().toLowerCase();
    const inputEl = document.querySelector('#searchField');
    const studentsList = document.querySelector('tbody');

    const arrOfStudents = [...studentsList.children];
    const students = arrOfStudents.map(el => el.innerText.toLowerCase());

    arrOfStudents.map(el => el.classList.remove('select'));

    if (input === '') {
      return;
    }

    const result = [];

    for (let i = 0; i < students.length; i++) {
      if (students[i].includes(input)) {
        result.push(i);
      }
    }

    result.map(i => arrOfStudents[i].classList.add('select'));

    inputEl.value = '';
  }
}