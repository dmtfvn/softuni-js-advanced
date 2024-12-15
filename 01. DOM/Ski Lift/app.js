window.addEventListener('load', solve);

function solve() {
  const firstNameInput = document.querySelector('#first-name');
  const lastNameInput = document.querySelector('#last-name');
  const peopleCountInput = document.querySelector('#people-count');
  const fromDateInput = document.querySelector('#from-date');
  const daysCountInput = document.querySelector('#days-count');

  const formBtn = document.querySelector('#next-btn');

  const ticketInfoList = document.querySelector('.ticket-info-list');
  const confirmTicket = document.querySelector('.confirm-ticket');

  const mainEl = document.querySelector('#main');

  function createListEl(fName, lName, pCount, fromDate, daysCount) {
    const listEl = document.createElement('li');
    listEl.className = 'ticket';

    const articleEl = document.createElement('article');

    const h3El = document.createElement('h3');
    h3El.textContent = `Name: ${fName} ${lName}`;

    articleEl.appendChild(h3El);
    articleEl.appendChild(createParagraph(`From date: ${fromDate}`));
    articleEl.appendChild(createParagraph(`For ${daysCount} days`));
    articleEl.appendChild(createParagraph(`For ${pCount} people`));

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      firstNameInput.value = fName;
      lastNameInput.value = lName;
      peopleCountInput.value = pCount;
      fromDateInput.value = fromDate;
      daysCountInput.value = daysCount;

      listEl.remove();

      formBtn.disabled = false;
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
        mainEl.remove();

        const h1El = document.createElement('h1');
        h1El.id = 'thank-you';
        h1El.textContent = 'Thank you, have a nice day!'

        const backBtn = document.createElement('button');
        backBtn.id = 'back-btn';
        backBtn.textContent = 'Back';
        backBtn.addEventListener('click', () => {
          location.reload();
        });

        document.body.appendChild(h1El);
        document.body.appendChild(backBtn);
      });

      const cancelBtn = document.createElement('button');
      cancelBtn.className = 'cancel-btn';
      cancelBtn.textContent = 'Cancel';
      cancelBtn.addEventListener('click', () => {
        confirmTicket.innerHTML = '';

        formBtn.disabled = false;
      });

      listEl.className = 'ticket-content';

      listEl.appendChild(confirmBtn);
      listEl.appendChild(cancelBtn);

      confirmTicket.appendChild(listEl);
    });

    listEl.appendChild(articleEl);
    listEl.appendChild(editBtn);
    listEl.appendChild(continueBtn);

    ticketInfoList.appendChild(listEl);
  }

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      firstNameInput.value === '' ||
      lastNameInput.value === '' ||
      peopleCountInput.value === '' ||
      fromDateInput.value === '' ||
      daysCountInput.value === ''
    ) {
      return;
    }

    createListEl(
      firstNameInput.value,
      lastNameInput.value,
      peopleCountInput.value,
      fromDateInput.value,
      daysCountInput.value
    );

    firstNameInput.value = '';
    lastNameInput.value = '';
    peopleCountInput.value = '';
    fromDateInput.value = '';
    daysCountInput.value = '';

    formBtn.disabled = true;
  })

  function createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }
}