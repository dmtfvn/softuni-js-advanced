window.addEventListener('load', solve);

function solve() {
  const formNextBtn = document.querySelector('#next-btn');

  const firstNameInput = document.querySelector('#first-name');
  const lastNameInput = document.querySelector('#last-name');
  const fromDateInput = document.querySelector('#from-date');
  const toDateInput = document.querySelector('#to-date');

  const infoList = document.querySelector('.info-list');
  const confirmList = document.querySelector('.confirm-list');

  const h1El = document.querySelector('#status');

  let firstName;
  let lastName;
  let fromDate;
  let toDate;

  formNextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      firstNameInput.value === '' ||
      lastNameInput.value === '' ||
      fromDateInput.value === '' ||
      toDateInput.value === '' ||
      fromDateInput.value >= toDateInput.value
    ) {
      return;
    }

    createListItem();

    firstNameInput.value = '';
    lastNameInput.value = '';
    fromDateInput.value = '';
    toDateInput.value = '';

    formNextBtn.disabled = true;
  });

  function createListItem() {
    firstName = firstNameInput.value;
    lastName = lastNameInput.value;
    fromDate = fromDateInput.value;
    toDate = toDateInput.value;

    const listEl = document.createElement('li');
    listEl.className = 'vacation-content';

    const articleEl = document.createElement('article');

    const h3El = document.createElement('h3');
    h3El.textContent = `Name: ${firstName} ${lastName}`;

    const pFromDate = document.createElement('p');
    pFromDate.textContent = `From date: ${fromDate}`;

    const pToDate = document.createElement('p');
    pToDate.textContent = `To date: ${toDate}`;

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';

    const continueBtn = document.createElement('button');
    continueBtn.className = 'continue-btn';
    continueBtn.textContent = 'Continue';

    articleEl.appendChild(h3El);
    articleEl.appendChild(pFromDate);
    articleEl.appendChild(pToDate);

    listEl.appendChild(articleEl);
    listEl.appendChild(editBtn);
    listEl.appendChild(continueBtn);

    infoList.appendChild(listEl);
  }

  infoList.addEventListener('click', (e) => {
    if (e.target.textContent === 'Edit') {
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      fromDateInput.value = fromDate;
      toDateInput.value = toDate;

      infoList.querySelector('.vacation-content').remove();

      formNextBtn.disabled = false;
    }

    if (e.target.textContent === 'Continue') {
      const listItemEl = infoList.querySelector('.vacation-content');

      infoList.querySelector('.vacation-content button').remove();
      infoList.querySelector('.vacation-content button').remove();

      const confirmBtn = document.createElement('button');
      confirmBtn.className = 'confirm-btn';
      confirmBtn.textContent = 'Confirm';

      const cancelBtn = document.createElement('button');
      cancelBtn.className = 'cancel-btn';
      cancelBtn.textContent = 'Cancel';

      listItemEl.appendChild(confirmBtn);
      listItemEl.appendChild(cancelBtn);

      confirmList.appendChild(listItemEl);
    }
  });

  confirmList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      confirmList.querySelector('.vacation-content').remove();
    }

    if (e.target.textContent === 'Confirm') {
      h1El.className = 'vacation-confirmed';
      h1El.textContent = 'Vacation Requested';
    }

    if (e.target.textContent === 'Cancel') {
      h1El.className = 'vacation-cancelled';
      h1El.textContent = 'Cancelled Vacation';
    }

    formNextBtn.disabled = false;
  });

  h1El.addEventListener('click', () => {
    window.location.reload();
  });
}