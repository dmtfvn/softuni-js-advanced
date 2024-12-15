window.addEventListener('load', solve);

function solve() {
  const nextBtn = document.querySelector('#next-btn');

  const firstNameInput = document.querySelector('#first-name');
  const lastNameInput = document.querySelector('#last-name');
  const dateInInput = document.querySelector('#date-in');
  const dateOutInput = document.querySelector('#date-out');
  const peopleCountInput = document.querySelector('#people-count');

  const infoList = document.querySelector('.info-list');
  const confirmList = document.querySelector('.confirm-list');

  const verification = document.querySelector('#verification');

  function createListEl(firstName, lastName, dateIn, dateOut, peopleCount) {
    const listEl = document.createElement('li');
    listEl.className = 'reservation-content';

    const articleEl = document.createElement('article');

    const h3El = document.createElement('h3');
    h3El.textContent = `Name: ${firstName} ${lastName}`;

    articleEl.appendChild(h3El);
    articleEl.appendChild(createParagraph(`From date: ${dateIn}`));
    articleEl.appendChild(createParagraph(`To date: ${dateOut}`));
    articleEl.appendChild(createParagraph(`For ${peopleCount} people`));

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      dateInInput.value = dateIn;
      dateOutInput.value = dateOut;
      peopleCountInput.value = peopleCount;

      listEl.remove();

      nextBtn.disabled = false;
    });

    const continueBtn = document.createElement('button');
    continueBtn.className = 'continue-btn';
    continueBtn.textContent = 'Continue';
    continueBtn.addEventListener('click', () => {
      editBtn.remove();
      continueBtn.remove();
      listEl.remove();

      const confirmBtn = document.createElement('button');
      confirmBtn.className = 'confirm-btn';
      confirmBtn.textContent = 'Confirm';
      confirmBtn.addEventListener('click', () => {
        listEl.remove();
        nextBtn.disabled = false;

        verification.className = 'reservation-confirmed';
        verification.textContent = 'Confirmed.';
      });

      const cancelBtn = document.createElement('button');
      cancelBtn.className = 'cancel-btn';
      cancelBtn.textContent = 'Cancel';
      cancelBtn.addEventListener('click', () => {
        listEl.remove();
        nextBtn.disabled = false;

        verification.className = 'reservation-cancelled';
        verification.textContent = 'Cancelled.';
      });

      listEl.appendChild(confirmBtn);
      listEl.appendChild(cancelBtn);

      confirmList.appendChild(listEl);
    });

    listEl.appendChild(articleEl);
    listEl.appendChild(editBtn);
    listEl.appendChild(continueBtn);

    infoList.appendChild(listEl);
  }

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      firstNameInput.value === '' ||
      lastNameInput.value === '' ||
      dateInInput.value === '' ||
      dateOutInput.value === '' ||
      peopleCountInput.value === '' ||
      dateInInput.value >= dateOutInput.value
    ) {
      return;
    }

    createListEl(
      firstNameInput.value,
      lastNameInput.value,
      dateInInput.value,
      dateOutInput.value,
      peopleCountInput.value
    );

    firstNameInput.value = '';
    lastNameInput.value = '';
    dateInInput.value = '';
    dateOutInput.value = '';
    peopleCountInput.value = '';

    nextBtn.disabled = true;
  });

  function createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }
}