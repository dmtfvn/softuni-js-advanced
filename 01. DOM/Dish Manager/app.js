window.addEventListener("load", solve);

function solve() {
  const formBtn = document.querySelector('#form-btn');

  const firstNameIp = document.querySelector('#first-name');
  const lastNameIp = document.querySelector('#last-name');
  const ageIp = document.querySelector('#age');
  const selectEl = document.querySelector('#genderSelect');
  const taskEl = document.querySelector('#task');

  let totalCount = document.querySelector('#progress-count');

  const inProgressEl = document.querySelector('#in-progress');
  const finishedEl = document.querySelector('#finished');

  const clearBtn = document.querySelector('#clear-btn');

  function createListEl(firstName, lastName, age, select, task) {
    const listEl = document.createElement('li');
    listEl.className = 'each-line';

    const articleEl = document.createElement('article');

    const h4El = document.createElement('h4');
    h4El.textContent = `${firstName} ${lastName}`;

    const genderAgePara = document.createElement('p');
    genderAgePara.textContent = `${select}, ${age}`;

    const dishInfoPara = document.createElement('p');
    dishInfoPara.textContent = `Dish description: ${task}`;

    articleEl.appendChild(h4El);
    articleEl.appendChild(genderAgePara);
    articleEl.appendChild(dishInfoPara);

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      firstNameIp.value = firstName;
      lastNameIp.value = lastName;
      ageIp.value = age;
      selectEl.value = select;
      taskEl.value = task;

      listEl.remove();

      totalCount.textContent--;
    });

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Mark as complete';
    completeBtn.addEventListener('click', () => {
      editBtn.remove();
      completeBtn.remove();
      listEl.remove();

      finishedEl.appendChild(listEl);

      totalCount.textContent--;
    });

    listEl.appendChild(articleEl);
    listEl.appendChild(editBtn);
    listEl.appendChild(completeBtn);

    inProgressEl.appendChild(listEl);
  }

  formBtn.addEventListener('click', () => {
    if (
      firstNameIp.value === '' ||
      lastNameIp.value === '' ||
      ageIp.value === '' ||
      selectEl.value === '' ||
      taskEl.value === ''
    ) {
      return;
    }

    createListEl(
      firstNameIp.value,
      lastNameIp.value,
      ageIp.value,
      selectEl.value,
      taskEl.value
    );

    firstNameIp.value = '';
    lastNameIp.value = '';
    ageIp.value = '';
    selectEl.value = '';
    taskEl.value = '';

    totalCount.textContent++;
  });

  clearBtn.addEventListener('click', () => {
    finishedEl.innerHTML = '';
  });
}