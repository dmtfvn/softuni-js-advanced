function solve() {
  const formAddBtn = document.querySelector('#add-worker');

  const firstNameEl = document.querySelector('#fname');
  const lastNameEl = document.querySelector('#lname');
  const emailEl = document.querySelector('#email');
  const birthEl = document.querySelector('#birth');
  const positionEl = document.querySelector('#position');
  const salaryEl = document.querySelector('#salary');

  const tableBodyEl = document.querySelector('#tbody');

  const totalBudget = document.querySelector('#sum');

  function createTableRowEl(firstName, lastName, email, birth, position, salary) {
    const tRowEl = document.createElement('tr');

    tRowEl.appendChild(createTableDataEl(firstName));
    tRowEl.appendChild(createTableDataEl(lastName));
    tRowEl.appendChild(createTableDataEl(email));
    tRowEl.appendChild(createTableDataEl(birth));
    tRowEl.appendChild(createTableDataEl(position));
    tRowEl.appendChild(createTableDataEl(salary));

    const tdBtnsWrapper = document.createElement('td');

    const firedBtn = document.createElement('button');
    firedBtn.className = 'fired';
    firedBtn.textContent = 'Fired';
    firedBtn.addEventListener('click', () => {
      const curBudget = Number(totalBudget.textContent) - Number(salary);

      totalBudget.textContent = curBudget.toFixed(2);

      tRowEl.remove();
    });

    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      firstNameEl.value = firstName;
      lastNameEl.value = lastName;
      emailEl.value = email;
      birthEl.value = birth;
      positionEl.value = position;
      salaryEl.value = salary;

      tRowEl.remove();

      const curBudget = Number(totalBudget.textContent) - Number(salary);

      totalBudget.textContent = curBudget.toFixed(2);
    });

    tdBtnsWrapper.appendChild(firedBtn);
    tdBtnsWrapper.appendChild(editBtn);

    tRowEl.appendChild(tdBtnsWrapper);

    tableBodyEl.appendChild(tRowEl);

    const curBudget = Number(totalBudget.textContent) + Number(salary);

    totalBudget.textContent = curBudget.toFixed(2);
  }

  formAddBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      firstNameEl.value === '' ||
      lastNameEl.value === '' ||
      emailEl.value === '' ||
      birthEl.value === '' ||
      positionEl.value === '' ||
      salaryEl.value === ''
    ) {
      return;
    }

    createTableRowEl(
      firstNameEl.value,
      lastNameEl.value,
      emailEl.value,
      birthEl.value,
      positionEl.value,
      salaryEl.value
    );

    firstNameEl.value = '';
    lastNameEl.value = '';
    emailEl.value = '';
    birthEl.value = '';
    positionEl.value = '';
    salaryEl.value = '';
  })

  function createTableDataEl(content) {
    const td = document.createElement('td');
    td.textContent = content;

    return td;
  }
}

solve()