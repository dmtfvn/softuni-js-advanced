window.addEventListener("load", solve);

function solve() {
  const previewListEl = document.querySelector('#preview-list');
  const completeListEl = document.querySelector('#complete-list');
  const testRideBtnEl = document.querySelector('#test-ride-btn');

  const colorInput = document.querySelector('#colors');
  const bikeInput = document.querySelector('#motorcycles');
  const dateInput = document.querySelector('#datetime');
  const nameInput = document.querySelector('#full-name');
  const emailInput = document.querySelector('#email');

  let color;
  let bike;
  let date;
  let name;
  let email;

  function createListEl() {
    color = colorInput.value;
    bike = bikeInput.value;
    date = dateInput.value;
    name = nameInput.value;
    email = emailInput.value;

    const listItemEl = document.createElement('li');

    const articleEl = document.createElement('acticle');

    articleEl.appendChild(createParagraph(`Color: ${color}`));
    articleEl.appendChild(createParagraph(`Model: ${bike}`));
    articleEl.appendChild(createParagraph(`For: ${date}`));
    articleEl.appendChild(createParagraph(`Contact: ${name}`));
    articleEl.appendChild(createParagraph(`Test Ride On: ${email}`));

    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    const editBtnEl = document.createElement('button');
    editBtnEl.className = 'edit-btn';
    editBtnEl.textContent = 'Edit';

    const nextBtnEl = document.createElement('button');
    nextBtnEl.className = 'next-btn';
    nextBtnEl.textContent = 'Next';

    btnContainer.appendChild(editBtnEl);
    btnContainer.appendChild(nextBtnEl);

    listItemEl.appendChild(articleEl);
    listItemEl.appendChild(btnContainer);

    previewListEl.appendChild(listItemEl);
  }

  testRideBtnEl.addEventListener('click', () => {
    if (
      colorInput.value === '' ||
      bikeInput.value === '' ||
      dateInput.value === '' ||
      nameInput.value === '' ||
      emailInput.value === ''
    ) {
      return;
    }

    createListEl();

    colorInput.value = '';
    bikeInput.value = '';
    dateInput.value = '';
    nameInput.value = '';
    emailInput.value = '';

    testRideBtnEl.disabled = true;
  });

  previewListEl.addEventListener('click', (e) => {
    const listEl = previewListEl.querySelector('li');

    if (e.target.textContent === 'Edit') {
      colorInput.value = color;
      bikeInput.value = bike;
      dateInput.value = date;
      nameInput.value = name;
      emailInput.value = email;

      listEl.remove();

      testRideBtnEl.disabled = false;
    }

    if (e.target.textContent === 'Next') {
      completeListEl.appendChild(listEl);

      listEl.querySelector('.btn-container').remove();

      const completeBtn = document.createElement('button');
      completeBtn.className = 'complete-btn';
      completeBtn.textContent = 'Complete';

      listEl.appendChild(completeBtn);
    }
  });

  completeListEl.addEventListener('click', () => {
    completeListEl.innerHTML = '';

    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'confirm-btn';
    confirmBtn.textContent = 'Your Test Ride is Confirmed';

    document.querySelector('.data-view').appendChild(confirmBtn);
  });

  const reload = document.querySelector('.data-view');
  reload.addEventListener('click', (e) => {
    if (e.target.className === 'confirm-btn') {
      window.location.reload();
    }
  });

  function createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }
}