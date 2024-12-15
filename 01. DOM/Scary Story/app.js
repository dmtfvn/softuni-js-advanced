window.addEventListener("load", solve);

function solve() {
  const formBtn = document.querySelector('#form-btn');

  const firstNameEl = document.querySelector('#first-name');
  const lastNameEl = document.querySelector('#last-name');
  const ageEl = document.querySelector('#age');
  const titleEl = document.querySelector('#story-title');
  const genreEl = document.querySelector('#genre');
  const storyEl = document.querySelector('#story');

  const previewListEl = document.querySelector('#preview-list');

  const mainEl = document.querySelector('#main');

  function createListEl(firstName, lastName, age, title, genre, story) {
    const listEl = document.createElement('li');
    listEl.className = 'story-info';

    const articleEl = document.createElement('article');

    const h4El = document.createElement('h4');
    h4El.textContent = `Name: ${firstName} ${lastName}`;

    articleEl.appendChild(h4El);
    articleEl.appendChild(createParaEl(`Age: ${age}`));
    articleEl.appendChild(createParaEl(`Title: ${title}`));
    articleEl.appendChild(createParaEl(`Genre: ${genre}`));
    articleEl.appendChild(createParaEl(story));

    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.textContent = 'Save Story';
    saveBtn.addEventListener('click', () => {
      mainEl.innerHTML = '';

      const h1El = document.createElement('h1');
      h1El.textContent = 'Your scary story is saved!';

      mainEl.appendChild(h1El);
    });

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit Story';
    editBtn.addEventListener('click', () => {
      firstNameEl.value = firstName;
      lastNameEl.value = lastName;
      ageEl.value = age;
      titleEl.value = title;
      genreEl.value = genre;
      storyEl.value = story;

      listEl.remove();

      formBtn.disabled = false;

      saveBtn.disabled - true;
      editBtn.disabled - true;
      deleteBtn.disabled - true;
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.addEventListener('click', () => {
      listEl.remove();

      formBtn.disabled = false;
    });

    listEl.appendChild(articleEl);
    listEl.appendChild(saveBtn);
    listEl.appendChild(editBtn);
    listEl.appendChild(deleteBtn);

    previewListEl.appendChild(listEl);
  }

  formBtn.addEventListener('click', () => {
    if (
      firstNameEl.value === '' ||
      lastNameEl.value === '' ||
      ageEl.value === '' ||
      titleEl.value === '' ||
      genreEl.value === '' ||
      storyEl.value === ''
    ) {
      return;
    }

    createListEl(
      firstNameEl.value,
      lastNameEl.value,
      ageEl.value,
      titleEl.value,
      genreEl.value,
      storyEl.value
    );

    firstNameEl.value = '';
    lastNameEl.value = '';
    ageEl.value = '';
    titleEl.value = '';
    genreEl.value = '';
    storyEl.value = '';

    formBtn.disabled = true;
  });

  function createParaEl(content) {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }
}